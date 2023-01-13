const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').createServer(app);
const webSocket = require('ws');
const { Server } = require('http');
const DB = require('./lib/mongoController');
const codes = new DB("code")
const wsServer = new webSocket.Server({ server:server, path: "/session"})

wsServer.on('connection',async function connection(ws, req){
    const myCode = await codes.getByName(req.url.split("=")[1])
    console.log("my code ", myCode);
    console.log("new client connected");
    ws.send(`the code is ${myCode.code}`);


    ws.on('message', function incoming(message){
        console.log(`received : ${message}`);
        ws.send(`the cide is  ${message}`);
    });
});



app.use(express.json());

app.use(cors({
    origin:'*'
}))

// app.use('/session', require('./Routs/sessionRouts'))


// app.listen(4000, ()=>{
//     console.log("Express is listening on port 4000")
// })
server.listen(4000, ()=>{
    console.log("ws is listen on port 4000");
})