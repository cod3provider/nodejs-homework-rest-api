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
}