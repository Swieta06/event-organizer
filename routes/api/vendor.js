const express = require("express");
const router = express.Router();
const vendorController = require("../../controllers/vendorControllers");
const authentication = require("../../middlewares/authentication");
const authenticationAdmin = require("../../middlewares/authenticationAdmin");
const { body, validationResult } = require('express-validator');
const response = require('../../utils/response');

router.use(authentication);

router.get("/", vendorController.getAllVendor);

router.use(authenticationAdmin);

router.post("/",
    body('name', 'Name tidak boleh kosong!').notEmpty(),
    body('province', 'province tidak boleh kosong!').notEmpty(),
    body('city', 'city tidak boleh kosong!').notEmpty(),
    body('phone', 'phone tidak boleh kosong!').notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = errors.mapped()
            const name = error.name?.msg
            const province = error.province?.msg
            const city = error.city?.msg
            const phone = error.phone?.msg

            const data = {
                "name" : name,
                "province" : province,
                "city" : city,
                "phone" : phone
            }

            res.status(400).json(response("error", null, data));
            return;
        }
        next();
    },
    vendorController.createVendor);

router.get("/:id", vendorController.getVendorById);
router.put("/:id",
    body('name', 'Name tidak boleh kosong!').notEmpty(),
    body('province', 'province tidak boleh kosong!').notEmpty(),
    body('city', 'city tidak boleh kosong!').notEmpty(),
    body('phone', 'phone tidak boleh kosong!').notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = errors.mapped()
            const name = error.name?.msg
            const province = error.province?.msg
            const city = error.city?.msg
            const phone = error.phone?.msg

            const data = {
                "name" : name,
                "province" : province,
                "city" : city,
                "phone" : phone
            }

            res.status(400).json(response("error", null, data));
            return;
        }
        next();
    },
    vendorController.updateVendor);

router.delete("/:id", vendorController.deleteVendor);
module.exports = router;
