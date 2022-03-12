exports.getTnc = async (req, res) => {
  try {
    res.render("pages/tnc", {
      title: "Terms and Conditions",
    });
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};
