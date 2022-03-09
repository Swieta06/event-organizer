const router = require("express").Router();
const { packageControllers } = require("../../controllers");
const authentication = require("../../middlewares/authentication");
const authenticationAdmin = require("../../middlewares/authenticationAdmin");

router.use(authentication, authenticationAdmin);

router.get('/', packageControllers.getAllPackages);
router.get('/:id', packageControllers.getPackage);
router.delete('/:id', packageControllers.deletePackage);

module.exports = router;
