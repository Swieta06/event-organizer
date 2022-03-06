const response = require('../../utils/response');

async function login(req, res) {
    try {
        if (req.isAuthenticated()) {
            req.flash("success", "Login berhasil!");
            res.redirect("/");
            return;
          }
        res.render("pages/index", { title: "Express" });
    } catch (error) {
        req.flash("error", "Internal server error");
        res.status(500).json(response('Internal server error', null, error));
    }
}

module.exports = login