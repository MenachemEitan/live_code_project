// const webSocket = require('ws')
// const server = new webSocket.Server({port:'8080'})

const { Socket } = require('socket.io');
const express = require('express');
const app = express();
// server.on('connection', socket =>{
//     socket.on("message", massage =>{
//        socket.send('blabla') 
//     })
// })

const io = require('socket.io')(express,{
    cors: { origin:"*" }
});

io.on('connection', (socket)=>{
    console.log('user connected');

    socket.on('massage', (massage)=>{
        console.log(massage);
        io.emit('massage', `${socket.id.substr(0,2)} said ${massage}`)
    })
})

http.listen(8080,()=> console.log("socket.io listen on port 8080"))

module.exports = io