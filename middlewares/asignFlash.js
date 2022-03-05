// Memasukan Flash ke Varibel Res untuk dirender di view setelah redirect

module.exports = (req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
};
