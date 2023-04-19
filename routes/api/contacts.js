const express = require('express');

const {
	getAll,
	getById,
	add,
	removeById,
	updateById,
	updateFavouriteById
} = require('@root/controllers')

const {validateBody, isValidId} = require('@root/middlewares');

const {schemas} = require('@root/models');

const router = express.Router();

router.get('/', getAll);

router.get('/:id', isValidId, getById);

router.post('/', validateBody(schemas.addSchema), add);

router.delete('/:id', isValidId, removeById);

router.put('/:id', isValidId, validateBody(schemas.addSchema), updateById);

router.patch('/:id/favorite', isValidId, validateBody(schemas.updateFavouriteSchema), updateFavouriteById);

module.exports = router;
