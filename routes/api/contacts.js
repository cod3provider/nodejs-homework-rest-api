const express = require('express');

<<<<<<< HEAD
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
=======
const ctrl = require('@root/controllers/contacts');

const {validateBody} = require('@root/middlewares');

const schemas = require('@root/schemas/contacts');

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post('/', validateBody(schemas.addSchema), ctrl.add);

router.delete('/:id', ctrl.removeById);

router.put('/:id', validateBody(schemas.addSchema), ctrl.updateById);
>>>>>>> master

module.exports = router;
