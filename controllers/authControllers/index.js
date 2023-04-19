const {ctrlWrapper} = require('@root/helpers');

const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const changeSubscription = require('./changeSuscription');

module.exports = {
	register: ctrlWrapper(register),
	login: ctrlWrapper(login),
	getCurrent: ctrlWrapper(getCurrent),
	logout: ctrlWrapper(logout),
	changeSubscription: ctrlWrapper(changeSubscription),
}