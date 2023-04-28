const {Schema, model} = require('mongoose');
const Joi = require('joi');

const {handleMongooseError} = require('@root/helpers');

const emailVerify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema({
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter",
    },
    token: {
        type: String,
        default: null,
    },
    avatarURL: {
        type: String,
        required: true,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationCode: {
        type: String,
        required: [true, 'Verify token is required'],
    }
}, {versionKey: false});

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailVerify).required(),
    password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailVerify).required(),
    password: Joi.string().min(6).required(),
});

const emailVerifySchema = Joi.object({
    email: Joi.string().pattern(emailVerify).required(),
});


const subscriptionSchema = Joi.object({
    subscription: Joi.string().valid("starter", "pro", "business"),
});



const userSchemas = {
    registerSchema,
    loginSchema,
    subscriptionSchema,
    emailVerifySchema,
};

const User = model("user", userSchema);

module.exports = {
    User,
    userSchemas,
};