import Context from "../Context";

async function HandlerReceivedOfferICE(e,context,data) {
    // console.log(data);

    let answerPC= context.getData(Context.KEY_ANSWER_PEER_CONNECTION);

    await answerPC.addIceCandidate(new RTCIceCandidate(data.ice));
}
export default HandlerReceivedOfferICE;