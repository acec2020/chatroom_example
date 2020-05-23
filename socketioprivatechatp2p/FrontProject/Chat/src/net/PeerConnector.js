import SocketEvent from "../events/SocketEvents";

class PeerConnector {

    constructor(context) {
        this._context=context;
    }

    async connectTarget(socketId){
        this._offerPC=new RTCPeerConnection();

        let offer= await this._offerPC.createOffer();
        this._context.socketConnector.emit(SocketEvent.OFFER,{receiver:socketId,offer:offer});
        // console.log(offer);
    }

    get context() {
        return this._context;
    }
}
export default PeerConnector;