const createErr = require("http-errors");

function authentication(req, res, next) {
  const userLogin = req.user;
  if (!userLogin) {
    if (req.checkAPI(req.originalUrl)) {
      throw createErr(403, "Login terlebih dahulu!");
    }
    return res.redirect("/#login");
  }
  next();
}

module.exports = authentication;
