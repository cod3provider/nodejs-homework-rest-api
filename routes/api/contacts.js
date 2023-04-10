const express = require('express');

const ctrl = require('@root/controllers/contacts');

const {validateBody, isValidId} = require('@root/middlewares');

const {schemas} = require('@root/models/contact');

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:id', isValidId, ctrl.getById);

router.post('/', validateBody(schemas.addSchema), ctrl.add);

router.delete('/:id', isValidId, ctrl.removeById);

router.put('/:id', isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.patch('/:id/favorite', isValidId, validateBody(schemas.updateFavouriteSchema), ctrl.updateFavouriteById);

module.exports = router;
