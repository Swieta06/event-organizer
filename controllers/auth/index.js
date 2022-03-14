const register = require("./register.controller");
const login = require("./login.controller");
const logout = require("./logout");
const { requestResetPassword } = require("./requestResetPassword");
const { confirmResetPassword } = require("./confirmResetPassword");

module.exports = {
  register,
  login,
  logout,
  requestResetPassword,
  confirmResetPassword,
};
