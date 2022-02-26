function authentication(req, res, next) {
  const userLogin = req.user;
  if (!userLogin) {
    res.redirect("/");
    return;
  }
  next();
}
module.exports = authentication;
