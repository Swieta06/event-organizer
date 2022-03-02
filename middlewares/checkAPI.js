/**
 * This middleware assign function checkAPI to request
 * checkAPI is a function that check if the request is from the API
 */
module.exports = (req, res, next) => {
  req.checkAPI = (url) => {
    url = url.toLowerCase();
    url = url.split("/");
    url = url[1];
    if (url === "api") {
      return true;
    }
    return false;
  };
  next();
};
