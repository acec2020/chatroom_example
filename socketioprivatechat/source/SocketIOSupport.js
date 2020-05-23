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
    })
}

module.exports.configSocketIO=configSocketIO;