const passport = require("passport");
const { Auth } = require("../../controllers")
const route = require("express").Router()
const { body, validationResult } = require('express-validator');
const response = require('../../utils/response');

route.post("/register",
    body('nama').notEmpty().withMessage('Nama tidak boleh kosong!'),
    body('email').notEmpty().withMessage('Email tidak boleh kosong!').isEmail().withMessage('Email tidak valid!'),
    body('password').notEmpty().withMessage('Password tidak boleh kosong!').isLength({ min: 5 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = errors.mapped()

            const nama = error.name?.msg
            const email = error.email?.msg
            const password = error.password?.msg

            const data = {
                "name" : nama,
                "email" : email,
                "password" : password
            }

            req.flash("error", data);
            res.redirect("/");
            return;
        }
        next();
    },
    Auth.register);

route.post("/login",
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
            res.redirect("/");
            return;
        }
        next();
    },
    passport.authenticate("local", { failureRedirect: "/", failureFlash: true }),
    Auth.login);

module.exports = route