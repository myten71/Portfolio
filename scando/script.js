var audioFiles = [  ["fjorden.wav", "album2.jpg"],
  ["norweezy bop.wav", "album3.jpg"],
  ["smoke pops.wav", "album4.jpg"],
  ["WEEKN1.wav", "album4.jpg"],
  ["WEEKN2.wav", "album5.jpg"],
  ["afroswing.wav", "album6.jpg"]
];

var albumArt = [  "album2.jpg",  "album3.jpg",  "album4.jpg",  "album4.jpg",  "album5.jpg",  "album6.jpg"];

var trackList = [  "Fjorden Fusion",  "Norweezy Bop",  "Smoke Pops",  "WEEKN Boyz",  "WEEKN boyz 2",  "afroswing"];

var currentSongIndex = 0;
var audio = new Audio(audioFiles[currentSongIndex][0]);
var albumSongIndex = 0;
var currentTrackIndex = 0;

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function mute() {
  if (audio.muted) {
    audio.muted = false;
    document.getElementById("volume2").value = audio.volume * 10;
  } else {
    audio.muted = true;
    document.getElementById("volume2").value = 0;
  }
}

function next() {
  currentSongIndex = (currentSongIndex + 1) % audioFiles.length;
  albumSongIndex = (albumSongIndex + 1) % albumArt.length;
  audio.src = audioFiles[currentSongIndex][0];
  document.getElementById("albumarten").src = albumArt[albumSongIndex];
  audio.play();
  currentTrackIndex = (currentTrackIndex + 1 + trackList.length) % trackList.length;
  document.getElementById("tracks").textContent = trackList[currentTrackIndex];
}

function previous() {
  currentSongIndex = (currentSongIndex - 1 + audioFiles.length) % audioFiles.length;
  albumSongIndex = (albumSongIndex - 1 + albumArt.length) % albumArt.length;
  audio.src = audioFiles[currentSongIndex][0];
  document.getElementById("albumarten").src = albumArt[albumSongIndex];
  currentTrackIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
  document.getElementById("tracks").textContent = trackList[currentTrackIndex];
  audio.play();
}

function setVolume() {
  audio.volume = this.value / 11;
}

document.addEventListener("DOMContentLoaded", function() {
  var volumButton = document.querySelector(".volum");
  var volumeSlider = document.querySelector("#volume2");
  volumeSlider.addEventListener("input", setVolume);
});