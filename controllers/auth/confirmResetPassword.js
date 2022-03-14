const { User, ResetPasswordToken } = require("../../models");
const createError = require("http-errors");
const bcrypt = require("../../utils/bcrypt");

exports.confirmResetPassword = async (req, res, next) => {
  try {
    const { password, confirmPassword, t } = req.body;

    if (password !== confirmPassword) {
      throw createError(400, "Confirm Password tidak sama dengan password!");
    }

    if (!t) {
      throw createError(400, "token tidak ada");
    }

    const tokenRaw = await ResetPasswordToken.findAll({
      raw: true,
      where: {
        token: t,
      },
    });

    if (!tokenRaw[0]) {
      throw createError(404, "Token tidak ditemukan");
    }

    if (new Date().getTime() > tokenRaw[0].expiredAt.getTime()) {
      throw createError(410, "Token sudah tidak berlaku");
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
      throw createError(500, "Error ketika melakukan update password");
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

    req.flash("success", {
      message: "Berhasil mengatur ulang password untuk akun dengan email",
      email: updatedUser[0].email,
    });
    res.status(201).redirect("/verification-success");
  } catch (error) {
    console.log(error);
    if (error.status < 500) {
      req.flash("error", { message: error.message });
      return res.status(error.status).redirect("back");
    }
    next(error);
  }
};
