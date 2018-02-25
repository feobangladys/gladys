const exec = require('child_process').exec;

// ask external ip to http://ifconfig.me/
module.exports = function getip(callback) {
	cmd = 'curl http://ifconfig.me/ip';
	var child = exec(cmd, function(error, stdout, stderr) {
		if (error !== null) {
			sails.log.debug(`GetIP : exec error : ${error}`);
		} else {
			sails.log.debug(`GetIP : exec stdout : ${stdout}`);
			callback(`${stdout}`);
		}
	});
}
