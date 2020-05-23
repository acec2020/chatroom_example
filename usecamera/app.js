(async function () {
    let video = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    });
    document.querySelector("video").srcObject = video;
})();