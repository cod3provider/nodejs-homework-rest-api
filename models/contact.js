const {Schema, model} = require('mongoose');
const Joi = require('joi');
const {handleMongooseError} = require('@root/helpers');

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
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'user',
	}
}, {versionKey: false});

// usually add this -> versionKey: false, timestamps: true

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

const contactSchemas = {
	addSchema,
	updateFavouriteSchema,
};

const Contact = model("contact", contactSchema);

module.exports = {
	Contact,
	contactSchemas,
};