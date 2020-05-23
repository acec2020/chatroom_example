import Context from "../Context";

async function HandlerReceivedAnswerICE(e,context,data) {
    let offerPC=context.getData(Context.KEY_OFFER_PEER_CONNECTION);
    await offerPC.addIceCandidate(new RTCIceCandidate(data.ice));
}

export default HandlerReceivedAnswerICE;