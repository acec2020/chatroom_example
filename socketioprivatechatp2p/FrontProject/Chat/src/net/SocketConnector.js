import SocketEvent from "../events/SocketEvents";
import Events from "../events/Events";

class SocketConnector {
    constructor(context) {
        this._context=context;
        this._socket=io();
        this._socket.on(Events.LIST_CLIENTS,clients=>{
            this._context.fire(Events.LIST_CLIENTS,{clients:clients,currentSocketId:this._socket.id});
        });
        this._socket.on(Events.MSG,data=>{
            // console.log(data);
            this._context.fire(Events.MSG,data);
        });
        this._socket.on(SocketEvent.OFFER,data=>{
            console.log(data);
            this._context.fire(Events.RECEIVED_OFFER,data);
        });
        this._socket.on(SocketEvent.ANSWER,data=>{
            this._context.fire(Events.RECEIVED_ANSWER,data);
        });
        this._socket.on(SocketEvent.OFFER_ICE,data=>{
            this._context.fire(Events.RECEIVED_OFFER_ICE,data);
        });
        this._socket.on(SocketEvent.ANSWER_ICE,data=>{
            this._context.fire(Events.RECEIVED_ANSWER_ICE,data);
        });
    }

    get socketId(){
        return this._socket.id;
    }

    sendMsg(msg,targetSocketId){6
        // this._socket.emit("msg",{receiver:targetSocketId,sender:this._socket.id,msg:msg});
        emit("msg",{receiver:targetSocketId,sender:this._socket.id,msg:msg});
    }

    emit(eventType,data){
        // console.log("Send data to server >>>>>>>>>");
        // console.log("eventType:"+eventType);
        // console.log("data:"+data);
        // console.log("Send data to server <<<<<<<<<");
        data.sender=this._socket.id;
        this._socket.emit(eventType,data);
    }
}

export default SocketConnector;