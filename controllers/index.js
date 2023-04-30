const {
	      getAll,
	      getById,
	      add,
	      removeById,
	      updateById,
	      updateFavouriteById,
      } = require('./contactsControllers');

const {
	register,
	login,
	getCurrent,
	logout,
	changeSubscription,
	updateAvatar,
	verify,
	resendVerifyEmail,
} = require('./authControllers');

module.exports = {
	getAll,
	getById,
	add,
	removeById,
	updateById,
	updateFavouriteById,
	register,
	login,
	getCurrent,
	logout,
	changeSubscription,
	updateAvatar,
	verify,
	resendVerifyEmail,
}