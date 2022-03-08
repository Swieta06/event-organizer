exports.getEvents = async (req, res) => {
    try {
        res.render("pages/events", {
            title: "Events",
        });
    } catch (error) {
        next(createError(error.status || 500, error.message));
    }
};
