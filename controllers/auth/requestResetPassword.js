const { User, ResetPasswordToken } = require("../../models");
const createError = require("http-errors");
const uuid = require("uuid").v4;
const emailContent = require("../../utils/emailContent");
const emailService = require("../../utils/emailService");
const response = require("../../utils/response");

exports.requestResetPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      throw createError(400, "email not defined");
    }
    const user = await User.findAll({
      raw: true,
      where: {
        email: email,
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

    if (!user[0]) {
      throw createError(403, "Email is not registered");
    }

    await ResetPasswordToken.destroy({
      where: {
        email,
      },
    });

    const newToken = await ResetPasswordToken.create({
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
      "Reset Password Confirmation",
      content
    );

    res
      .status(201)
      .json(response("Reset password sent", newToken.get({ plain: true })));
  } catch (error) {
    console.log(error);
    next(createError(error.status || 500, error.message));
  }
};
