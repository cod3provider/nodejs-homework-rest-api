const {User} = require('@root/models');

const logout = async (req, res) => {
	const {_id} = req.user;
	await User.findByIdAndUpdate(_id, {token: null});

	res.json({
		message: "Logout success"
	})
}

module.exports = logout;