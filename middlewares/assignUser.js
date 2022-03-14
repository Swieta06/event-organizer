/**
 * This middleware assign user data to each response
 * if user is not logged in, assign null to user
 * if user is logged in, assign user data to user
 */
module.exports = (req, res, next) => {
  if (req.user) {
    const { id, name, email, role, photo, address } = req.user;
    res.locals.user = { id, name, email, role, photo, address };
  } else {
    res.locals.user = null;
  }
  next();
};
