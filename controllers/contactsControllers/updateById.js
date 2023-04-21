const {Contact} = require('@root/models');
const {HttpError} = require('@root/helpers');

const updateById = async (req, res) => {
	const {id} = req.params;
	const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
	if(!result){
		throw HttpError(404, "Not Found");
	}
	res.json(result);
};

module.exports = updateById;