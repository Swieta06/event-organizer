exports.getAbout = async (req, res) => {
    try {
        res.render("pages/about", {
            title: "About Us",
        });
    } catch (error) {
        next(createError(error.status || 500, error.message));
    }
};
