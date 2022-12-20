let toggleMute = () => {
  const backgroundMusic = document.querySelector(".background-music");
  const volumeImage = document.querySelector("#volume");
  if (backgroundMusic.muted == true) {
    volumeImage.src = "./images/sound-on.png";
  } else {
    volumeImage.src = "./images/sound-off.png";
  }
  backgroundMusic.muted = !backgroundMusic.muted;
};

const toggleVolume = document.getElementById("volume");
toggleVolume.addEventListener("click", () => {
  toggleMute();
});

let playHoverSFX = () => {
  const hoverSFX = document.querySelector(".hover-select-sfx");
  hoverSFX.currentTime = 0;
  hoverSFX.play();
};

const hoverImages = document.querySelectorAll(".player-images");
hoverImages.forEach((hoverImage) => {
  hoverImage.addEventListener("mouseover", () => {
    playHoverSFX();
  });
});
