class SocketConnector {
    constructor() {
        this._socket=io();
        this._socket.on("listClients",clients=>{
            $(this).trigger("listClients",{clients:clients,currentSocketId:this._socket.id});
        });
        this._socket.on("msg",data=>{
            // console.log(data);
            $(this).trigger("msg",data);
        });
    }

    get socketId(){
        return this._socket.id;
    }

    sendMsg(msg,targetSocketId){
        this._socket.emit("msg",{receiver:targetSocketId,sender:this._socket.id,msg:msg});
    }
}

export default SocketConnector;