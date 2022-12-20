let startMusic = () => {
  const music = document.querySelector(".background-music");
  music.play();
};

let pressStart = () => {
  const startPage = document.querySelector(".start-page");
  startPage.style.display = "none";
};

let toggleMainPage = () => {
  const mainPage = document.querySelector(".main-page");
  mainPage.style.display = "flex";
};

const startButton = document.querySelector(".start-btn");
startButton.addEventListener("click", () => {
  pressStart();
  startMusic();
  toggleMainPage();
});
