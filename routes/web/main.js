const { homeControllers } = require("../../controllers");
const router = require("express").Router();

router.get("/", homeControllers.getIndex);
router.get("/events", homeControllers.getEvents);
router.get("/about", homeControllers.getAbout);
router.get("/find", homeControllers.getFind);
router.get("/tnc", homeControllers.getTnc);

module.exports = router;
