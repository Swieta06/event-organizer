const createErr = require("http-errors");

function authentication(req, res, next) {
  const userLogin = req.user;
  if (!userLogin) {
    throw createErr(403, "Login terlebih dahulu!");
  }
  next();
}

module.exports = authentication;
