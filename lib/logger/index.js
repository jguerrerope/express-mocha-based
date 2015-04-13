var winston = require('winston');

module.exports = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: true,
      prettyPrint: true,
      level: 'debug',
      label: 'fleeway-api-rest'
    }),
    //new (winston.transports.File)({ filename: 'areslite.log'})
  ]
});
