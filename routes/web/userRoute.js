const passport = require("passport");
const { Auth } = require("../../controllers")
const router = require("express").Router()
const { body, validationResult } = require('express-validator');

router.post("/register",
    body('nama').notEmpty().withMessage('Nama tidak boleh kosong!'),
    body('email').notEmpty().withMessage('Email tidak boleh kosong!').isEmail().withMessage('Email tidak valid!'),
    body('password').notEmpty().withMessage('Password tidak boleh kosong!')
        .isLength({ min: 8 }).withMessage('Karakter password tidak boleh kurang dari 8!')
        .matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('Password hanya bisa menggunakan huruf, angka dan tanda baca umum'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = errors.mapped()

            const nama = error.nama?.msg
            const email = error.email?.msg
            const password = error.password?.msg

            const data = {
                "nama" : nama,
                "email" : email,
                "password" : password
            }

            req.flash("error", data);
            res.redirect("#register");
            return;
        }
        next();
    },
    Auth.register);

router.post("/login",
    body('email').notEmpty().withMessage('Email tidak boleh kosong!').isEmail().withMessage('Email tidak valid!'),
    body('password').notEmpty().withMessage('Password tidak boleh kosong!'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = errors.mapped()

            const email = error.email?.msg
            const password = error.password?.msg

            const data = {
                "email" : email,
                "password" : password
            }

            req.flash("error", data);
            res.redirect("#login");
            return;
        }
        next();
    },
    passport.authenticate("local", { failureRedirect: "/", failureFlash: true }),
    Auth.login);

router.post("/logout", Auth.logout);

module.exports = router