//Go to youtube. Open any video. Add a button to the page using JS. On click of the button, the video playback speed should change to 10x
const btn = document.createElement("button");
btn.innerHTML="10x";
const containers = document.getElementsByClassName("ytp-right-controls");
const contnr= containers[0];
contnr.append(btn);
btn.addEventListener("click",()=>{
    document.querySelector('video').playbackRate=10;
})
