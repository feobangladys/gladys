const Promise = require('bluebird');
var sentences = require('./sentences.js');
module.exports = function uninstall(){
	return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
		if(lang[0].language!='fr-FR')
			gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?)', [sentences.sentenceIpEn.sentences[0].uuid]);
		else gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?)', [sentences.sentenceIpFr.sentences[0].uuid]);
	});
};
