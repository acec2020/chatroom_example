const SocketIOServer=require("socket.io");

function configSocketIO(server) {
    let io=SocketIOServer(server);

    function broadCastClientList(){
        io.of("/").clients((err,clients)=>{
            if(!err){
                io.emit("listClients",clients);
            }
        });
    }

    io.on("connection",socket=>{
        broadCastClientList();

        socket.on("msg",data=>{
           if(data.receiver&&data.msg){
                io.to(data.receiver)
                    .emit("msg",data);
                socket.emit("msg",data);
           }
        });

        socket.on("disconnect",()=>{
            broadCastClientList();
        });

        socket.on("offer",data=>{
            let receiver=data.receiver;
            if(receiver){
                io.to(receiver).emit("offer",data);
            }
        });

        socket.on("answer",data=>{
            let receiver=data.receiver;
            if(receiver){
                io.to(receiver).emit("answer",data);
            }
        });

        socket.on("offerICE",data=>{
            let receiver=data.receiver;
            if(receiver){
                io.to(receiver).emit("offerICE",data);
            }
        });

        socket.on("answerICE",data=>{
            let receiver=data.receiver;
            if(receiver){
                io.to(receiver).emit("answerICE",data);
            }
        });
    })
}

module.exports.configSocketIO=configSocketIO;