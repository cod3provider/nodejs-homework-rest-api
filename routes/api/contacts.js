const express = require('express');

const ctrl = require('@root/controllers/contacts');

const {validateBody} = require('@root/middlewares');

const schemas = require('@root/schemas/contacts');

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post('/', validateBody(schemas.addSchema), ctrl.add);

router.delete('/:id', ctrl.removeById);

router.put('/:id', validateBody(schemas.addSchema), ctrl.updateById);

module.exports = router;
