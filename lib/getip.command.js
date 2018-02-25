var getip = require('./getip.js');

// send ip to user 1
module.exports = function command(scope) {
	switch (scope.label) {
	case 'getip':
		myIP = "";
		getip(function(myIP){
			gladys.notification.create ({
				user: 1, title: 'IP',
				text: myIP,
				icon: 'fa fa-terminal',
				iconColor: 'bg-green',
				priority: 1
			});
		});
		break;
	default:
		break;
	}
};

