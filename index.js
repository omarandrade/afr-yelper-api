/**
 * gateway.js
 * 
 * The server runs in the DMZ and forwards requests to the client through the firewall
 * 
 */
const debug = require('debug')('api:index');
const app = require('./app');
const http = require('http');

const config = require('config');
const ENV = config.util.getEnv('NODE_ENV');

// If the host kills the process... perform any actions (log)
process.on('SIGTERM', () => {
    httpsServer.close(() => {
        console.log('SIGTERM issued...app is shutting down');
        process.exit(0); // eslint-disable-line no-process-exit
    });
});

let HTTP_PORT = 8080;
// Override default ports when running on windows or mac
if (process.platform === 'darwin' || process.platform === 'win32') {
    HTTP_PORT = 8080;
}

// Start http server
const httpServer = http.createServer(app);
httpServer.listen(HTTP_PORT, () => {
        console.log('app is listening at localhost:' + HTTP_PORT);
        debug('app is listening at localhost:' + HTTP_PORT);
});


// If the host kills the process... perform any actions (log)
process.on('SIGTERM', () => {
    httpServer.close(() => {
        console.log('SIGTERM issued...app is shutting down');
        process.exit(0); // eslint-disable-line no-process-exit
    });
});