const Promise = require('bluebird');
var exec = require('child_process').exec;

module.exports = function getip() {
	return gladys.param.getValue('IP_CMD')
	.then((cmd) => {
		if (cmd == null){
			cmd = 'curl http://ifconfig.me/ip';
		}
		sails.log.debug('Exec parameter : ' + cmd);
		return exec(cmd)
		.then(function(stdout) => {
			sails.log.debug('Mon ip : ' + stdout);
		}).catch(function (err) {
			sails.log.debug('Error IP_CMD : ' + IP_CMD + ' parameter');
		});
	}).catch(function (err) {
		sails.log.debug('Error IP_CMD : ' + IP_CMD + ' parameter');
	});
}


