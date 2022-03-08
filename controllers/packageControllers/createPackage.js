const response = require('../../utils/response');
const { Package } = require("../../models");
const uuid = require('uuid');

async function createPackage(req, res, next) {
    try {
        let {
            name,
            slug,
            minParticipant,
            price,
            additionCost,
            maxSnack,
            features,
            detailPrice,
            minOrderTime
        } = req.body;
        const id = uuid.v4();

        const data = {
            id,
            name,
            slug,
            minParticipant,
            price,
            additionCost,
            maxSnack,
            features,
            detailPrice,
            minOrderTime
        }

        const payload = await Package.create(data);
        res.status(200).send(response("Success", payload));
    } catch (error) {
        next(error);
    }
}

module.exports = createPackage;