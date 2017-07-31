function makePlayer(id, src) {
    var el = document.getElementById(id);
    var myVideo = document.createElement('video');
    myVideo.setAttribute('controls', '');
    myVideo.setAttribute('width', '500');
    myVideo.setAttribute('height', '440');
    myVideo.setAttribute('id', 'video');
    myVideo.innerHTML = '<source src= ' + src + '>';

    var buttonStop = document.createElement('button');
    buttonStop.setAttribute('id', 'stopButton');
    buttonStop.innerHTML = 'Stop';
    el.appendChild(myVideo);
    el.appendChild(buttonStop);

}

makePlayer('player', 'https://www.w3schools.com/html/mov_bbb.mp4');

document.getElementById('player').children[0].addEventListener('volumechange', function () {
    console.log('volume changed!');
});
document.getElementById('player').children[0].addEventListener('play', function () {
    console.log('Playes!');
});
document.getElementById('player').children[0].addEventListener('pause', function () {
    console.log('Pause!');
});


document.getElementById('stopButton').addEventListener('click', stopVideo);

function stopVideo() {
    var video = document.getElementById('player').children[0];
    video.pause();
    console.log('Video stoped at: ' + Math.floor(video.currentTime) + 's.');
    video.currentTime = 0;

}





