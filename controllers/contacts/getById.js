const {Contact} = require('@root/models');
const {HttpError} = require('@root/helpers');

const getById = async (req, res) => {
	const {id} = req.params;
	const result = await Contact.findById(id);
	if(!result) {
		throw HttpError(404, "Not Found");
	}
	res.json(result);
};

module.exports = getById;