var getip = require('./lib/getip.js');
var command = require('./lib/getip.command.js');
var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');

module.exports = function(sails) {
	return {
		getip: getip,
		command: command,
		install: install,
		uninstall: uninstall
	};
};