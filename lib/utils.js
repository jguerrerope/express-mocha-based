var cheerio = require('cheerio');
var request = require('request');
var extend = require('extend');

// metodo que comprimer el request http
/*@_request -->
  {
    @url -->  direccion del request
    @options -> opcioens adicionales
  }
*/
//@_cb --> function de retorno callback(err,$)
module.exports.doRequest = function( _request ,callback){
  if(!_request){
     if(callback){
        callback("Not request define",null)
     }else{
      throw "Not request define";
     }
  }

  /*if(isJar){
    var myjar =  jar || require('request').jar();
    request = request.defaults({'jar':myjar});
  }*/

  var userAgent =[
    "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90)",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.1) Gecko/2008070208 Firefox/3.0.1",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:25.0) Gecko/20100101 Firefox/25.0",
    "Opera/7.50 (Windows ME; U) [en]"
  ];

  var options ={
    'headers': {
      'Accept':'*/*',
      'Accept-Language':'es-ES,es;q=0.8,en;q=0.6',
      'Cache-Control':'max-age=0',
      'Connection':'keep-alive',
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'User-Agent':userAgent[Math.floor(Math.random()*userAgent.length)],
      'timeout': 16000
    },
  }


  var options = extend (  options, _request);

  request(options, function (error, response, body) {
      if (error){
        return callback(error,null);
      }else if(response.statusCode != 200){
        return callback("Error " + response.statusCode);
      }else{
         var $ = cheerio.load(body,{normalizeWhitespace: true});
        $.body = body;
        return callback(null,$);
      }  
  });
}