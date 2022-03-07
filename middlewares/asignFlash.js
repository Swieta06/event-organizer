// Memasukan Flash error/success dari COntroller ke Path Redirect
// Dan digunakan di views

module.exports = (req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
};
