var express = require('express');
var router = express.Router();
var logger = require('./lib/logger');

var controllerList = require('./core/controller');


function isVar(_var){
	if (typeof _var === 'undefined')return false;
	return true;
}

router.post("/ads", function(req, res) {
	//html response
	//res.send('hello world');
	

	//json response 
	var testObejt = function (id){
		this.id = id;
	}
	var result = []
	for(int i=0;i<100;i++){
		result.push(new testObejt(i));
	}

	logger.info('json response: ' + JSON.stringify(result) );
	res.set('Content-Type','application/json').status(201).json(result);

});



module.exports = router;





