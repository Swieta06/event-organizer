const createErr = require("http-errors");

function authenticationAdmin(req, res, next) {
  const role = req.user?.role;
  console.log(role);
  if (role != "admin") {
    throw createErr(403, "Anda tidak memiliki otoritas!");
  }
  next();
}

module.exports = authenticationAdmin;