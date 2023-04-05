const contacts = require('@root/models/contacts');
const HttpError = require('@root/helpers/HttpError');
const {ctrlWrapper} = require("../helpers");

const getAll = async (req, res) => {
	const result = await contacts.listContacts();
	res.json(result);
};

const getById = async (req, res) => {
	const {id} = req.params;
	const result = await contacts.getContactById(id);
	if(!result) {
		throw HttpError(404, "Not Found");
		// const error = new Error("Not found");
		// error.status = 404;
		// throw error;
		// return res.status(404).json({
		//   message: "Not found"
		// })
	}
	res.json(result);
	// const {status = 500, message = "Server error"} = error;
	// res.status(status).json({
	//   message,
	// })
};

const add = async (req, res) => {
	const result = await contacts.addContact(req.body);
	res.status(201).json(result);
};

const removeById = async (req, res) => {
	const {id} = req.params;
	const result = await contacts.removeContact(id);
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.json({
		message: "Contact deleted"
	})
};

const updateById = async (req, res) => {
	const {id} = req.params;
	const result = await contacts.updateContact(id, req.body);
	console.log(result)
	if(!result) {
		throw HttpError(404, "Not found")
	}
	res.json(result);
};

module.exports = {
	getAll: ctrlWrapper(getAll),
	getById: ctrlWrapper(getById),
	add: ctrlWrapper(add),
	removeById: ctrlWrapper(removeById),
	updateById: ctrlWrapper(updateById),
};