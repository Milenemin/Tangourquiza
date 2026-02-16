// const button = document.getElementById("audioBtn");
// const audio = document.getElementById("audio");

// button.addEventListener("click", () => {
//   if (audio.paused) {
//     audio.play();
//   } else {
//     audio.pause();
//   }
// });
const playButton = document.getElementById("playButton");
const audio = document.getElementById("tangoAudio");

let isPlaying = false;

playButton.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    playButton.classList.add("playing");
  } else {
    audio.pause();
    isPlaying = false;
    playButton.classList.remove("playing");
  }
});
