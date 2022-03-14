const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { Auth } = require("../../controllers")

// route request reset password
router.post("/request-reset-password",
  body('email').notEmpty().withMessage('Email tidak boleh kosong!')
      .isEmail().withMessage('Email tidak valid!'),
  (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          const error = errors.mapped()

          const email = error.email?.msg

          const data = {
              "email" : email
          }

          req.flash("error", data);
          res.redirect("back");
          return;
      }
      next();
  },
  Auth.requestResetPassword);

// route confirm reset password
router.post("/confirm-reset-password",
  body('password').notEmpty().withMessage('Password tidak boleh kosong!')
      .isLength({ min: 8 }).withMessage('Karakter password tidak boleh kurang dari 8!')
      .matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('Password hanya bisa menggunakan huruf, angka dan tanda baca umum'),
  body('confirmPassword').notEmpty().withMessage('Confirm Password tidak boleh kosong!')
      .isLength({ min: 8 }).withMessage('Karakter password tidak boleh kurang dari 8!')
      .matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('Password hanya bisa menggunakan huruf, angka dan tanda baca umum')
      .custom((value, { req }) => {
          if (value !== req.body.password) {
            throw new Error('Confirm Password tidak sama dengan password!');
          }
      return true;
    }),
    (req, res, next) => {
      // Handle the request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          const error = errors.mapped()

          const password = error.password?.msg
          const confirmPassword = error.confirmPassword?.msg

          const data = {
              "password" : password,
              "confirmPassword" : confirmPassword
          }

          req.flash("error", data);
          res.redirect("back");
          return;
      }
      next();
    },
  Auth.confirmResetPassword);

router.get("/request-reset-password", (req, res) => {
  res.render("pages/request-reset-password-test");
});

router.get("/confirm-reset-password", (req, res) => {
  const token = req.query.t;
  res.render("pages/confirm-reset-password-test", { token });
});

router.get("/verification-sent", (req, res) => {
  res.render("pages/verification-sent");
});

router.get("/verification-success", (req, res) => {
  res.render("pages/verification-success");
});

module.exports = router;
