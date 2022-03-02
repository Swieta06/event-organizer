const response = require("../utils/response");

const errorHandler = (err, req, res, next) => {
  // check if the error is from the API
  if (req.checkAPI(req.originalUrl)) {
    return res
      .status(err.status || 500)
      .json(response(err.message, null, err.stack));
  }
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
};

module.exports = errorHandler;
