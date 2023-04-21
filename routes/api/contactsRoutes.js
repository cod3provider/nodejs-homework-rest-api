const express = require('express');

const {
  getAll,
  getById,
  add,
  removeById,
  updateById,
  updateFavouriteById
} = require('@root/controllers');

const {validateBody, isValidId, authenticate} = require('@root/middlewares');

const {contactSchemas} = require('@root/models');

const router = express.Router()

router.get('/', authenticate, getAll);

router.get('/:id', authenticate, isValidId, getById);

router.post('/', authenticate, validateBody(contactSchemas.addSchema), add);

router.delete('/:id', authenticate, isValidId, removeById);

router.put('/:id', authenticate, isValidId, validateBody(contactSchemas.addSchema), updateById);

router.patch('/:id/favorite', authenticate, isValidId, validateBody(contactSchemas.updateFavouriteSchema), updateFavouriteById);

module.exports = router;