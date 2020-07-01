// Creating Server
const PORT = 3010;
const http = require('http');
const app = require('./app')
const server = http.createServer(app)
const socket = require("socket.io");
const io = socket(server);
var db = require('./db')



const users = {};
// function uuidv4() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     });
// }


io.on('connection', socket => {
    var x = socket.id
    if (!users[x]) {
        users[x] = x;
    }
    // let sender = users.create(socket, x);
    socket.emit("yourID", x);
    io.sockets.emit("allUsers", users);
    socket.on('disconnect', () => {
        console.log(users)
        delete users[x];
    })
    socket.on("callUser", (data) => {
        io.to(data.userToCall).emit('hey', {signal: data.signalData, from: data.from});
    })
    socket.on("acceptCall", (data) => {
        io.to(data.to).emit('callAccepted', data.signal);
    })
    socket.on("end",(from,to)=>{
        console.log(from,to)
    })
});

server.listen(PORT,() => {console.log('Server connected at PORT 3010')})