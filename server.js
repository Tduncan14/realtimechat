const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io')




const app = express();

// creating a servr

const server = http.createServer(app);

const io = socketio(server)




/// set the static folder


app.use(express.static(path.join(__dirname,'public')))


// run when client connect


io.on('connection', socket => {
    console.log('new ws connection')


    socket.emit('message','Welcom to chatCord')


    // Broadcast when a user connects

    socket.broadcast.emit('message',' A user has joined the chat');


    // runs when the client disconnects
    
    socket.on('disconnect', () =>{

        io.emit('message','A user has left the chat')
    })

    //listen  fro chatMessage

    socket.on('chatMessage',(msg) =>{
        io.emit('message',msg)
    })
});

const PORT = process.env.PORT || 3000


app.listen(PORT,() =>{
    console.log(`listening on ${PORT} port`)


})