const response = require('../../utils/response');

async function login(req, res) {
    try {
        if (req.isAuthenticated()) {
            res.redirect("/");
            return;
          }
        res.render("pages/index", { title: "Express" });
    } catch (error) {
        res.status(500).json(response('Internal server error', null, error));
    }
}

module.exports = login