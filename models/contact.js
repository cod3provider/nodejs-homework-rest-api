const {Schema, model} = require("mongoose");
const Joi = require('joi');
const{handleMongooseError} = require('../helpers');

const contactSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
	},
	phone: {
		type: String,
	},
	favorite: {
		type: Boolean,
		default: false,
	},
}, {versionKey: false});
// versionKey: false, timestamps: true

contactSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	phone: Joi.string().required(),
	favorite: Joi.boolean(),
});

const updateFavouriteSchema = Joi.object({
	favorite: Joi.boolean().required(),
});

const schemas = {
	addSchema,
	updateFavouriteSchema,
};

const Contact = model("contact", contactSchema);

module.exports = {
	Contact,
	schemas,
};