const { User, ResetPasswordToken } = require("../../models");
const createError = require("http-errors");
const response = require("../../utils/response");
const bcrypt = require("../../utils/bcrypt");

exports.confirmResetPassword = async (req, res, next) => {
  try {
    const { password, confirmPassword } = req.body;
    const { t } = req.query;

    if (password !== confirmPassword) {
      throw createError(200, "Password doesn't match");
    }

    if (!t) {
      throw createError(400, "Req query must have t");
    }

    const tokenRaw = await ResetPasswordToken.findAll({
      raw: true,
      where: {
        token: t,
      },
    });

    if (!tokenRaw[0]) {
      throw createError(404, "Token not found");
    }

    if (new Date().getTime() > tokenRaw[0].expiredAt.getTime()) {
      throw createError(410, "Token has been expired");
    }

    const newPassword = bcrypt.generate(password);

    const updated = await User.update(
      { password: newPassword },
      {
        where: {
          email: tokenRaw[0].email,
        },
      }
    );

    if (updated[0] == 0) {
      throw createError(500, "Error while updating password");
    }

    await ResetPasswordToken.destroy({
      where: {
        email: tokenRaw[0].email,
      },
    });

    const updatedUser = await User.findAll({
      raw: true,
      where: {
        email: tokenRaw[0].email,
      },
      attributes: [
        "id",
        "email",
        "name",
        "role",
        "photo",
        "address",
        "createdAt",
        "updatedAt",
      ],
    });

    res.status(201).json(response("Reset password success", updatedUser[0]));
  } catch (error) {
    console.log(error);
    next(createError(error.status || 500, error.message));
  }
};
