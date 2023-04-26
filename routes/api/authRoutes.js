const express = require('express');

const {register, login, getCurrent, logout, changeSubscription, updateAvatar} = require('@root/controllers');

const {validateBody, authenticate, upload} = require('@root/middlewares');

const {userSchemas} = require('@root/models');

const router = express.Router();

router.post('/register', validateBody(userSchemas.registerSchema), register);

router.post('/login', validateBody(userSchemas.loginSchema), login);

router.get('/current', authenticate, getCurrent);

router.post('/logout', authenticate, logout);

router.patch('/:id/subscription', authenticate, validateBody(userSchemas.subscriptionSchema), changeSubscription);

router.patch('/avatars', authenticate, upload.single('avatar'), updateAvatar);

module.exports = router;