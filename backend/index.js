// Creating Server
const PORT = 3010;
const http = require('http');
const app = require('./app')
const server = http.createServer(app)
const socket = require("socket.io");
const io = socket(server);
var db = require('./db')



io.on('connection', function (socket) {
    socket.on('join', function (data) {
        socket.join(data.roomId);
        socket.room = data.roomId;
        const sockets = io.of('/').in().adapter.rooms[data.roomId];
        if (sockets.length === 1) {
            socket.emit('init')
        } else {
            if (sockets.length === 2) {
                io.to(data.roomId).emit('ready')
            } else {
                socket.room = null
                socket.leave(data.roomId)
                socket.emit('full')
            }

        }
    });
    socket.on('signal', (data) => {
        io.to(data.room).emit('desc', data.desc)
    })
    socket.on('disconnect', () => {
        const roomId = Object.keys(socket.adapter.rooms)[0]
        if (socket.room) {
            io.to(socket.room).emit('disconnected')
        }

    })
});

// var users = require('./users')


// // const users = {};
// // function uuidv4() {
// //     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
// //         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
// //         return v.toString(16);
// //     });
// // }


// io.on('connection', socket => {
   
//     // console.log(socket)
//     socket.on('storeClientInfo', async (data) => {
//         console.log("connected custom id:", data);
//         console.log("data.userdi======================" + data.userId)
//         let sender
//         //if docter login
//          sender =await users.create(socket, data.userId);
//         //if pat login 

//          sender = await users.create(socket, data.pId);
//         console.log("sender======================"+sender)
//         // socket.id = data.userId;
//         // if (!users[data.userId]) {
//             // users[data.userId] = data.userId
//             // users[data.pId] = data.pId
//         // }
//         socket.emit("yourID", data.userId);


//         const recriver= await users.get(data.pId)

//         console.log(recriver)
//         if(recriver!=null){
//         recriver.emit("allUsers", data.pId);
//         }
//         // let sender = users.create(socket, x);
//         socket.on('disconnect', () => {
//             // console.log(users)
//             delete users[data.pId];
//             delete users[data.userId]
//         })
//     });
   
   
//     socket.on("callUser", (data) => {
//         // console.log(data)
//         io.to(data.userToCall).emit('hey', {signal: data.signalData, from: data.from});
//     })
//     socket.on("acceptCall", (data) => {
//         io.to(data.to).emit('callAccepted', data.signal);
//     })
//     socket.on("end",(from,to)=>{
//         console.log(from,to)
//     })
// });

server.listen(PORT,() => {console.log('Server connected at PORT 3010')})