// const contacts = require('@root/models/contacts');

const {Contact} = require('@root/models/contact');

const {HttpError, ctrlWrapper} = require('@root/helpers');

const getAll = async (req, res) => {
	const result = await Contact.find();
	res.json(result);
};

const getById = async (req, res) => {
	const {id} = req.params;
	const result = await Contact.findById(id);
	if(!result) {
		throw HttpError(404, "Not Found");
	}
	res.json(result);
};

const add = async (req, res) => {
	const result = await Contact.create(req.body);
	res.status(201).json(result);
};

const removeById = async (req, res) => {
	const {id} = req.params;
	const result = await Contact.findByIdAndRemove(id);
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.json({
		message: "Contact deleted"
	})
};

const updateById = async (req, res) => {
	const {id} = req.params;
	const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
	if(!result) {
		throw HttpError(404, "Not found");
	}
	res.json(result);
};

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

module.exports = {
	getAll: ctrlWrapper(getAll),
	getById: ctrlWrapper(getById),
	add: ctrlWrapper(add),
	removeById: ctrlWrapper(removeById),
	updateById: ctrlWrapper(updateById),
	updateFavouriteById: ctrlWrapper(updateFavouriteById),
};