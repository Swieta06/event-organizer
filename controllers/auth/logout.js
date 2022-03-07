async function logout(req, res, next) {
    try {
        req.logout();
        if(req.user) {
            req.flash("error", "Logout gagal!");
        } else {
            req.flash("success", "Logout berhasil!");
        }

        res.redirect("/");
    } catch (error) {
        next(error);
    }
}

module.exports = logout;