const http = require('http');
const app = require('./src/app');
const port = 8080;
const server = http.createServer(app);
server.listen(port);