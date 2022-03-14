const route = require("express").Router();
const { body, validationResult } = require('express-validator');
const response = require('../../utils/response');
const { adminController } = require("../../controllers");
const authentication = require("../../middlewares/authentication");
const authenticationAdmin = require("../../middlewares/authenticationAdmin");

route.use(authentication, authenticationAdmin);

route.get("/users", adminController.getAllUsers);

route.put("/:id",
    body('name').notEmpty().withMessage('Name tidak boleh kosong!'),
    body('email').notEmpty().withMessage('Email tidak boleh kosong!').isEmail().withMessage('Email tidak valid!'),
    body('password').notEmpty().withMessage('Password tidak boleh kosong!')
        .isLength({ min: 5 }).withMessage('Password harus lebih dari 5 karakter!'),
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

            res.status(400).send(response("Error", null, data))
            return;
        }
        next();
    },
    adminController.updateAdmin);

route.delete("/:id", adminController.deleteAdmin);

module.exports = route;