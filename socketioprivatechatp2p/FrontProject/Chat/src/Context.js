import SocketConnector from "./net/SocketConnector";
import PeerConnector from "./net/PeerConnector";
import HandlerReceivedOffer from "./handlers/HandlerReceivedOffer";
import Events from "./events/Events";
import HandlerStartChatSession from "./handlers/HandlerStartChatSession";
import HandlerReceivedAnswer from "./handlers/HandlerReceivedAnswer";
import HandlerReceivedOfferICE from "./handlers/HandlerReceivedOfferICE";
import HandlerReceivedAnswerICE from "./handlers/HandlerReceivedAnswerICE";

class Context {
    constructor() {
        this._this=$(this);
        this._sharedData=new Map();
        this._socketConnector=new SocketConnector(this);
        this._peerConnector=new PeerConnector(this);

        this.addListeners();
    }

    setData(k,v){
        this._sharedData.set(k,v);
    }

    getData(k){
        return this._sharedData.get(k);
    }

    addListeners(){
        let _this=$(this);
        _this.on(Events.RECEIVED_OFFER,HandlerReceivedOffer);
        _this.on(Events.RECEIVED_ANSWER,HandlerReceivedAnswer);
        _this.on(Events.START_CHAT_SESSION,HandlerStartChatSession);
        _this.on(Events.RECEIVED_OFFER_ICE,HandlerReceivedOfferICE);
        _this.on(Events.RECEIVED_ANSWER_ICE,HandlerReceivedAnswerICE);
    }

    fire(type,data){
        console.info("Fire event:"+type);
        this._this.trigger(type,[this,data]);
    }

    get socketConnector() {
        return this._socketConnector;
    }

    get peerConnector() {
        return this._peerConnector;
    }
}

Context.KEY_OFFER_PEER_CONNECTION="offerPc";
Context.KEY_ANSWER_PEER_CONNECTION="answerPC";
Context.KEY_DATA_CHANNEL="dataChannel";
Context.KEY_LOCAL_MEDIA_STREAM="mediaStream";
Context.KEY_REMOTE_MEDIA_STREAM="remoteMediaStream";

export default Context;