const video = document.querySelector("#video");
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const backward = document.querySelector('#backward');
const forward = document.querySelector('#forward');
const progress = document.querySelector('#range');

video.addEventListener('loadedmetadata', handleLoaded);
video.addEventListener('timeupdate', handleTimeUpdate);
progress.addEventListener('input', hanldeInput);

function handlePlay() {
    pause.hidden = false;
    play.hidden = true;
    video.play();
}

function handlePause() {
    play.hidden = false;
    pause.hidden = true;
    video.pause();
}

function handleBackward() {
    video.currentTime -= 10; 
    console.log(video.currentTime)
}

function handleForward(){
    video.currentTime += 10; 
    console.log(video.currentTime)
}

function handleLoaded() {
    progress.max = video.duration;
}

function handleTimeUpdate() {
    progress.value = video.currentTime;
}

function handleInput() {
   console.log("input", progress.value)
}