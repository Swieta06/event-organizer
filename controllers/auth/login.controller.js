async function login(req, res) {
    try {
        if (req.isAuthenticated()) {
            req.flash("success", "Login berhasil!");
            res.redirect("/");
            return;
          }
        res.render("pages/index", { title: "Express" });
    } catch (error) {
        next(error);
    }
}

module.exports = login;