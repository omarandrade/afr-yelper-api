/**
 * gateway.js
 * 
 * The server runs in the DMZ and forwards requests to the client through the firewall
 * 
 */
require('newrelic')
const debug = require('debug')('api:index');
const app = require('./app');
const http = require('http');

const config = require('config');
const ENV = config.util.getEnv('NODE_ENV');
logger.info('NODE_ENV: ' + ENV);

// If the host kills the process... perform any actions (log)
process.on('SIGTERM', () => {
    httpsServer.close(() => {
        logger.info('SIGTERM issued...app is shutting down');
        process.exit(0); // eslint-disable-line no-process-exit
    });
});

let HTTP_PORT = 9080;
// Override default ports when running on windows or mac
if (process.platform === 'darwin' || process.platform === 'win32') {
    HTTP_PORT = 9080;
}

// Start http server
const httpServer = http.createServer(app);
httpServer.listen(HTTP_PORT, () => {
        logger.info('app is listening at localhost:' + HTTP_PORT);
        debug('app is listening at localhost:' + HTTP_PORT);
});


// If the host kills the process... perform any actions (log)
process.on('SIGTERM', () => {
    httpServer.close(() => {
        logger.info('SIGTERM issued...app is shutting down');
        process.exit(0); // eslint-disable-line no-process-exit
    });
});