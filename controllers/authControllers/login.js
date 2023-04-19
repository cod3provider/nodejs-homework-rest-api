const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {HttpError} = require('@root/helpers');

const {User} = require('@root/models');

const {SECRET_KEY} = process.env;

const login = async (req,res) => {
	const {email, password} = req.body;
	const user = await User.findOne({email});
	if(!user){
		throw HttpError(401, "Invalid password or email");
	}

	const passwordCompare = await bcrypt.compare(password, user.password);
	if(!passwordCompare) {
		throw HttpError(401, "Invalid password or email");
	}

	const payload = {
		id: user._id,
	};

	const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "15h"});
	await User.findByIdAndUpdate(user._id, {token});

	res.json({
		token,
	});
}

module.exports = login;