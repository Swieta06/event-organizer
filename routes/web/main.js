const { homeControllers } = require("../../controllers");
const router = require("express").Router();

router.get("/", homeControllers.getIndex);
router.get("/faq", (req, res)=>{
    res.render("pages/faq");
});
router.get("/events", homeControllers.getIndex);
router.get("/about", homeControllers.getIndex);
router.get("/find", homeControllers.getIndex);

module.exports = router;