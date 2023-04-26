const fs = require('fs/promises');
const path = require('path');
const Jimp = require('jimp');

const {User} = require('@root/models');

const avatarsDir = path.join(__dirname, '../', '../', 'public', 'avatars');

const updateAvatar = async  (req, res) => {
	const {_id} = req.user;
	const {path: tempUpload, filename} = req.file;
	const avatarName = `${_id}_${filename}`;
	const resultUpload = path.join(avatarsDir, avatarName);

	Jimp.read(resultUpload, (err, avatarImg) => {
		if (err) throw err;
		avatarImg
		.resize(200, 200)
		.quality(60)
		.write(resultUpload);
	});

	await fs.rename(tempUpload, resultUpload);

	const avatarURL = path.join("avatars", avatarName);
	await User.findByIdAndUpdate(_id, {avatarURL});

	res.json({avatarURL});
}

module.exports = updateAvatar;