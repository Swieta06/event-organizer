const createErr = require("http-errors");
const response = require('../utils/response');

function authentication(req, res, next) {
  const userLogin = req.user;
  if (!userLogin) {
    console.log("not authentication")
    throw createErr(403, "Login terlebih dahulu!");
  }
  console.log("authentication")
  next();
}
module.exports = authentication;
