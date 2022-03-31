var host = process.env.HOST || 'localhost';
var port = process.env.PORT || 3001;

var cors_proxy = require('cors-anywhere');
cors_proxy
  .createServer({
    originWhitelist: ['http://localhost:3000'], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
    handleInitialRequest: function (req, res, location) {
      console.log(req.method, location.href);
      console.log(res);
    },
  })
  .listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
  });
