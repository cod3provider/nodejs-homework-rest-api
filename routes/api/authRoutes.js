const express = require('express');

const {register, login, getCurrent, logout, changeSubscription} = require('@root/controllers');

const {validateBody, authenticate} = require('@root/middlewares');

const {userSchemas} = require('@root/models');

const router = express.Router();

router.post('/register', validateBody(userSchemas.registerSchema), register);

router.post('/login', validateBody(userSchemas.loginSchema), login);

router.get('/current', authenticate, getCurrent);

router.post('/logout', authenticate, logout);

router.patch('/:id/subscription', authenticate, validateBody(userSchemas.subscriptionSchema), changeSubscription);

module.exports = router;