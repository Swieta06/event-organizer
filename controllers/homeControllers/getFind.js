exports.getFind = async (req, res) => {
    try {
        res.render("pages/find", {
            title: "Find Us",
        });
    } catch (error) {
        next(createError(error.status || 500, error.message));
    }
};
