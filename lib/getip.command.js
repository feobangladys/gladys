var getip = require('./getip.js');
module.exports = function command(scope) {
	switch (scope.label) {
	case 'getip':
		getip();
		break;
	default:
		break;
	}
};
