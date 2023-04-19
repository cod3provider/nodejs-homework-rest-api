const {HttpError} = require('@root/helpers');

const {User} = require('@root/models');

const changeSubscription = async (req, res) => {
	const {id} = req.params;
	const result = await User.findByIdAndUpdate(id, req.body, {new: true});
	if(!result) {
		throw HttpError(404, `ID ${id} or user with this id not found`);
	}
	res.json(result);
}

module.exports = changeSubscription;