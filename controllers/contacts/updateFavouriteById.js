const {Contact} = require('@root/models');
const {HttpError} = require('@root/helpers');

const updateFavouriteById = async (req, res) => {
	const {id} = req.params;
	const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
	if(!req.body) {
		res.status(400).json({"message": "missing field favorite"});
	}
	if(!result) {
		throw HttpError(404, "Not found");
	}
	res.json(result);
};

module.exports = updateFavouriteById;