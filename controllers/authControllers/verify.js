const {User} = require('@root/models');
const {HttpError} = require('@root/helpers');

const verify = async (req, res) => {
	const {verificationCode} = req.params;
	const user = await User.findOne({verificationCode});
	if (!user) {
		throw HttpError(404, "Email not found");
	}

	await User.findByIdAndUpdate(user._id, {verify: true, verificationCode: ""});

	res.json({
		message: "Email verify success"
	})
}

module.exports = verify;