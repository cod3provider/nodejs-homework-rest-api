const {Contact} = require('../../models');
const {HttpError} = require('../../helpers');

const removeById = async (req, res) => {
	const {id} = req.params;
	const result = await Contact.findByIdAndRemove(id);

	if(!result){
		throw HttpError(404, "Not Found");
	}
	res.json({
		message: "Contact deleted"
	})
};

module.exports = removeById;