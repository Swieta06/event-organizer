const db = require('../models/index');
const uuid = require('uuid').v4;
const emailContent = require('../utils/emailContent');
const emailService = require('../utils/emailService');
const bcrypt = require('../utils/bcrypt');
const response = require('../utils/response');

const controller = {
  requestResetPassword: async (req, res) => {
    try {
      const { email } = req.body;
      const user = await db.User.findAll({
        raw: true,
        where: {
          email: email,
        },
        attributes: [
          'id',
          'email',
          'name',
          'role',
          'photo',
          'address',
          'createdAt',
          'updatedAt',
        ],
      });

      if (!user[0]) {
        return res.status(403).json(response('Email is not registered'));
      }

      await db.ResetPasswordToken.destroy({
        where: {
          email,
        },
      });

      const newToken = await db.ResetPasswordToken.create({
        email,
        token: uuid(),
        expiredAt: new Date(new Date().getTime() + 30 * 60 * 1000), // 30 mins
      });

      // console.log(newToken.get({ plain: true })); // return raw token

      const content = emailContent.resetEmail(
        user[0].name,
        newToken.get({ plain: true }).token
      );

      await emailService.sendEmail(
        user[0].email,
        'Reset Password Confirmation',
        content
      );

      res
        .status(201)
        .json(response('Reset password sent', newToken.get({ plain: true })));
    } catch (err) {
      console.log(err);
      res.status(500).json(response('Internal server error', null, err));
    }
  },
  confirmResetPassword: async (req, res) => {
    try {
      const { password, confirmPassword } = req.body;
      const { t } = req.query;

      if (password !== confirmPassword) {
        return res.status(200).json(response("Password doesn't match"));
      }

      if (!t) {
        return res.status(200).json(response('Req query must have t'));
      }

      const tokenRaw = await db.ResetPasswordToken.findAll({
        raw: true,
        where: {
          token: t,
        },
      });

      if (!tokenRaw[0]) {
        return res.status(404).json(response('Token not found'));
      }

      if (new Date().getTime() > tokenRaw[0].expiredAt.getTime()) {
        return res.status(410).json(response('Token has been expired'));
      }

      const newPassword = bcrypt.generate(password);

      const updated = await db.User.update(
        { password: newPassword },
        {
          where: {
            email: tokenRaw[0].email,
          },
        }
      );

      if (updated[0] == 0) {
        throw Error('Internal server error');
      }

      await db.ResetPasswordToken.destroy({
        where: {
          email: tokenRaw[0].email,
        },
      });

      const updatedUser = await db.User.findAll({
        raw: true,
        where: {
          email: tokenRaw[0].email,
        },
        attributes: [
          'id',
          'email',
          'name',
          'role',
          'photo',
          'address',
          'createdAt',
          'updatedAt',
        ],
      });

      res.status(201).json(response('Reset password success', updatedUser[0]));
    } catch (err) {
      console.log(err);
      res.status(500).json(response('Internal server error', null, err));
    }
  },
};

module.exports = controller;
