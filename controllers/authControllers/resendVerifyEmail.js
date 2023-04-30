const {User} = require('@root/models');
const {HttpError, sendEmail} = require('@root/helpers');

const {BASE_URL} = process.env;

const resendVerifyEmail = async (req, res) => {
	const {email} = req.body;
	const user = await User.findOne({email});
	if(!user) {
		throw HttpError(404, "Not Found");
	}

	if (user.verify) {
		throw HttpError(400, "Email already verified")
	}

	const verifyEmail = {
		to: email,
		subject: "Verify email",
		html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationCode}">Click verify</a>`
	}

	await sendEmail(verifyEmail);

	res.json({
		message: "Email verification sent again"
	})
}

module.exports = resendVerifyEmail;