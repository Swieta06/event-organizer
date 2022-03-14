const response = require('../../utils/response');
const {
    Package
} = require("../../models");

async function updatePackage(req, res, next) {
    try {
        const id = req.params.id;
        const checkId = await Package.findOne({
            where: {
                id
            }
        });

        if(!checkId){
            res.status(400).json(response("Error", null, "Id tidak ditemukan"));
            return;
        }

        let {
            name,
            minParticipant,
            price,
            additionCost,
            maxSnack,
            features,
            detailPrice,
            minOrderTime
        } = req.body;

        const data = {
            name,
            minParticipant,
            price,
            additionCost,
            maxSnack,
            features,
            detailPrice,
            minOrderTime
        }

        const payload = await Package.update(data, {
            where: {
                id
            },
            returning: true
        });
        res.status(200).send(response("Success", payload));
    } catch (error) {
        next(error);
    }
}

module.exports = updatePackage;