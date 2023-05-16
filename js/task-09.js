const buttonEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

buttonEl.addEventListener('click', changeBodyColor)

function changeBodyColor(){
// const colorFn = getRandomHexColor();
// document.body.style.backgroundColor = colorFn;
// textEl.textContent = colorFn;
// console.log(colorFn);
document.body.style.backgroundColor = textEl.textContent = getRandomHexColor();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}