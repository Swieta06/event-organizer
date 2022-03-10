const router = require("express").Router();
const { productController } = require("../../controllers");
const authentication = require("../../middlewares/authentication");
const authenticationAdmin = require("../../middlewares/authenticationAdmin");
const upload = require("../../middlewares/uploadImageProduct");
const { body, validationResult } = require('express-validator');
const response = require('../../utils/response');

router.use(authentication);

router.get("/vendors/:vendorId", productController.getByVendor);

router.use(authenticationAdmin);

router.post("/",
    upload.single("photo"),
    body('VendorId').notEmpty().withMessage('Vendor tidak boleh kosong!'),
    body('name').notEmpty().withMessage('Name tidak boleh kosong!'),
    body('price').notEmpty().withMessage('Price tidak boleh kosong!').isInt().withMessage('Price harus berupa angka!'),
    body('CategoryId').notEmpty().withMessage('Category tidak boleh kosong!'),
    body('stock').notEmpty().withMessage('Stock tidak boleh kosong!').isInt().withMessage('Stock harus berupa angka!'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = errors.mapped()

            const VendorId = error.VendorId?.msg
            const name = error.name?.msg
            const price = error.price?.msg
            const CategoryId = error.CategoryId?.msg
            const stock = error.stock?.msg

            const data = {
                "VendorId" : VendorId,
                "name" : name,
                "price" : price,
                "CategoryId" : CategoryId,
                "stock" : stock
            }

            res.status(400).json(response("error", null, data));
            return;
        }
        next();
    }, productController.createProduct);

router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);

router.put("/:id",
    upload.single("photo"),
    body('VendorId').notEmpty().withMessage('Vendor tidak boleh kosong!'),
    body('name').notEmpty().withMessage('Name tidak boleh kosong!'),
    body('price').notEmpty().withMessage('Price tidak boleh kosong!').isInt().withMessage('Price harus berupa angka!'),
    body('CategoryId').notEmpty().withMessage('Category tidak boleh kosong!'),
    body('stock').notEmpty().withMessage('Stock tidak boleh kosong!').isInt().withMessage('Stock harus berupa angka!'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = errors.mapped()

            const VendorId = error.VendorId?.msg
            const name = error.name?.msg
            const price = error.price?.msg
            const CategoryId = error.CategoryId?.msg
            const stock = error.stock?.msg

            const data = {
                "VendorId" : VendorId,
                "name" : name,
                "price" : price,
                "CategoryId" : CategoryId,
                "stock" : stock
            }

            res.status(400).json(response("error", null, data));
            return;
        }
        next();
    }, productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;