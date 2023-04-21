const {ctrlWrapper} = require('@root/helpers');

const getAll = require('./getAll');
const getById = require('./getById');
const add = require('./add');
 const removeById = require('./removeById');
 const updateById = require('./updateById');
 const updateFavouriteById = require('./updateFavouriteById');

module.exports = {
	getAll: ctrlWrapper(getAll),
	getById: ctrlWrapper(getById),
	add: ctrlWrapper(add),
	removeById: ctrlWrapper(removeById),
	updateById: ctrlWrapper(updateById),
	updateFavouriteById: ctrlWrapper(updateFavouriteById),
};