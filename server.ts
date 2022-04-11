require('dotenv').config();

function main() {
  const host = process.env.HOST || 'localhost';
  const port = process.env.PORT || 3001;
  const corsProxy = require('cors-anywhere');

  corsProxy
    .createServer({
      originWhitelist: ['http://localhost:3000'], // Allow all origins
      requireHeader: ['origin', 'x-requested-with'],
      removeHeaders: ['cookie', 'cookie2'],
      handleInitialRequest: (req, res, location) => {
        console.log(req.method, location.href);
        console.log(res);
      },
    })
    .listen(port, host, () => {
      console.log(`Running proxy on ${host}:${port}`);
    });
}

main();
