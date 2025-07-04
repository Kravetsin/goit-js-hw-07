function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const background = document.querySelector("body");
const span = document.querySelector(".color");

button.addEventListener("click", () => {
  background.style.backgroundColor = getRandomHexColor();
  span.style.color = background.style.backgroundColor;
});
