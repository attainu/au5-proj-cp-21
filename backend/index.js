// Creating Server
const PORT = 3010;
const http = require('http');
const app = require('./app')
const server = http.createServer(app)

server.listen(PORT,() => {console.log('Server connected at PORT 3010')})