const router = require('express').Router();
const { packageControllers } = require('../../controllers');
const authentication = require('../../middlewares/authentication');
const authenticationAdmin = require('../../middlewares/authenticationAdmin');
const { body, validationResult } = require('express-validator');
const response = require('../../utils/response');

router.use(authentication, authenticationAdmin);

router.get('/', packageControllers.getAllPackages);
router.get('/:id', packageControllers.getPackage);
router.delete('/:id', packageControllers.deletePackage);
router.post('/',
    body('name', 'Name tidak boleh kosong!').notEmpty(),
    body('minParticipant', 'Minimal Participant tidak boleh kosong!').notEmpty(),
    body('price', 'Price tidak boleh kosong!').notEmpty(),
    body('additionCost', 'Addition Cost tidak boleh kosong!').notEmpty(),
    body('maxSnack', 'Maximal Snack tidak boleh kosong!').notEmpty(),
    body('features', 'Features tidak boleh kosong!').notEmpty().isArray(),
    body('detailPrice', 'Detail Price tidak boleh kosong!').notEmpty().isObject(),
    body('minOrderTime', 'Minimal Order Time tidak boleh kosong!').notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = errors.mapped()
            const name = error.name?.msg
            const minParticipant = error.minParticipant?.msg
            const price = error.price?.msg
            const additionCost = error.additionCost?.msg
            const maxSnack = error.maxSnack?.msg
            const features = error.features?.msg
            const detailPrice = error.detailPrice?.msg
            const minOrderTime = error.minOrderTime?.msg

            const data = {
                "name" : name,
                "minParticipant" : minParticipant,
                "name" : password,
                "price" : price,
                "additionCost" : additionCost,
                "maxSnack" : maxSnack,
                "features" : features,
                "detailPrice" : detailPrice,
                "minOrderTime" : minOrderTime,
            }

            res.status(400).json(response("error", null, data));
            return;
        }
        next();
    },
    packageControllers.createPackage);

router.put('/:id',
    body('name', 'Name tidak boleh kosong!').notEmpty(),
    body('minParticipant', 'Minimal Participant tidak boleh kosong!').notEmpty(),
    body('price', 'Price tidak boleh kosong!').notEmpty(),
    body('additionCost', 'Addition Cost tidak boleh kosong!').notEmpty(),
    body('maxSnack', 'Maximal Snack tidak boleh kosong!').notEmpty(),
    body('features', 'Features tidak boleh kosong!').notEmpty().isArray(),
    body('detailPrice', 'Detail Price tidak boleh kosong!').notEmpty().isObject(),
    body('minOrderTime', 'Minimal Order Time tidak boleh kosong!').notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = errors.mapped()
            const name = error.name?.msg
            const minParticipant = error.minParticipant?.msg
            const price = error.price?.msg
            const additionCost = error.additionCost?.msg
            const maxSnack = error.maxSnack?.msg
            const features = error.features?.msg
            const detailPrice = error.detailPrice?.msg
            const minOrderTime = error.minOrderTime?.msg

            const data = {
                "name" : name,
                "minParticipant" : minParticipant,
                "name" : password,
                "price" : price,
                "additionCost" : additionCost,
                "maxSnack" : maxSnack,
                "features" : features,
                "detailPrice" : detailPrice,
                "minOrderTime" : minOrderTime,
            }

            res.status(400).json(response("error", null, data));
            return;
        }
        next();
    },
    packageControllers.updatePackage);

module.exports = router;
