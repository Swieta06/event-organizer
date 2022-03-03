const { User } = require("../../models");
const createError = require("http-errors");

async function deleteAdmin(req, res, next) {
    try {
        const { id } = req.params;
        if ((req.user?.id == id) && (req.user?.role == "admin")) {
            const deleted = await User.destroy({
                where: {
                    id,
                },
            });
        }
        res.status(200).json(response("Success", deleted));
    } catch (error) {
        next(createError(error.status || 500, error.message));
    }
}

module.exports = deleteAdmin