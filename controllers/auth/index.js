const register = require("./register.controller");
const login = require("./login.controller");
const { requestResetPassword } = require("./requestResetPassword");
const { confirmResetPassword } = require("./confirmResetPassword");

module.exports = {
  register,
  login,
  requestResetPassword,
  confirmResetPassword,
};
