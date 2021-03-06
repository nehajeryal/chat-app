const io=require ("socket.io")(3000,{cors:{
    origin:"*",
},
});
const user={}
io.on('connection',socket=>{
    socket.on('new-user',name=>{
        users[socket.id]=name
        socket.broadcast.emit('user-connected',name)

    })
    socket.on('send-chat-message',message=>{
        socket.broadcast.emit('chat-message',{message:message,name:
            user[socket.id]})
    })
    
    socket.on('disconnect',()=>{
        socket.broadcast.emit('user-disconnected',user[socket.id])
       delete  user [socket.id]
        
    })
})






