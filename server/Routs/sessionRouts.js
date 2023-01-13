const express = require('express');
const route = express.Router();
const app = express()

route.get('/', (req, res) =>{
    res.send("dasvdfv")
})


// //// web socket

// const WebSocket = require('ws');
// const wss = new WebSocket.Server({ noServer: true });
// wss.on('connection', (ws) => {
//     // Send a message to the client
//     ws.send('Hello, client!');
  
//     // Handle messages from the client
//     ws.on('message', (message) => {
//       console.log(`Received message: ${message}`);
//     });
//   });
//   route.ws('/', (ws, req) => {
//     wss.handleUpgrade(req, ws, req.head, (ws) => {
//       wss.emit('connection', ws, req);
//     });
//   });
 
//   module.exports = route


// const express = require('express');
// const route = express.Router();
// const expressWs = require('express-ws')(route);

// // Create the WebSocket server
// const wss = new WebSocket.Server({ noServer: true });

// // Handle WebSocket connections
// wss.on('connection', (ws) => {
//   // Send a message to the client
//   ws.send('Hello, client!');

//   // Handle messages from the client
//   ws.on('message', (message) => {
//     console.log(`Received message: ${message}`);
//   });
// });

// // Attach the WebSocket server to the express router
// route.ws('/', (ws, req) => {
//   wss.handleUpgrade(req, ws, req.head, (ws) => {
//     wss.emit('connection', ws, req);
//   });
// });

// module.exports = route;

// const express = require('express');
// const route = express.Router();
// const expressWs = require('express-ws')(route);

// route.ws('/', (ws, req) => {
//     // Handle the WebSocket connection
//     ws.on('message', (msg) => {
//         console.log(msg);
//         ws.send(msg);
//     });
// });

// module.exports = route;





