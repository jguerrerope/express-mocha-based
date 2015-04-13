var request = require('supertest');
var api = require('../server.js');
var host = process.env.API_TEST_HOST || api;
var logger = require('../lib/logger');

request = request(host);


describe('recurso /ads',function(){
	describe('POST/GET',function(){
		it('debera obtener los algo',function(done){


			//crea solicitud de http enviando data
			request
				.post('/url')
				 //Accept application/json
				.set('Accept', 'application/json')
				.expect(201)
				.send(data)
				.expect('Content-Type', /application\/json/)
				.end(function(err,res){
					if (err) return done(err);
					var result = res.body;
          			
          			// anuncios encontrados
          			//logger.info('ads size:' + result.data.length, " isLastResult: "+ result.isLastResult);
          			done();
				});
		});
	});
});



