// const passport = require("../../config/passport")
const passport = require("passport");
const { Auth } = require("../../controllers")
const route = require("express").Router()
const { body, validationResult } = require('express-validator');
const response = require('../../utils/response');


route.post("/register",
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(response( "Error", null, errors.array() ));
        }
        next();
    },
    Auth.register);

route.post("/login",
    body('email').isEmail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(response( "Error", null, errors.array() ));
        }
        next();
    },
    passport.authenticate("local", { failureRedirect: "/" }),
    Auth.login);

module.exports = route