import Context from "../Context";

function HandlerReceivedAnswer(e,context,data) {
    context.getData(Context.KEY_OFFER_PEER_CONNECTION).setRemoteDescription(new RTCSessionDescription(data.answer));
}

export default HandlerReceivedAnswer;