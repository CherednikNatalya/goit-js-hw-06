const bodyRef = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const chanceRandomColor = (event) => {
  event.preventDefault();
  spanColor.textContent = getRandomHexColor();
    bodyRef.style.background = getRandomHexColor();
}
changeColorBtn.addEventListener("click", chanceRandomColor);



// const refs = {
//   body:document.querySelector('body'),
//   changeColorBtn: document.querySelector('.change-color'),
//   color: document.querySelector('.color'),
// }



// function chanceRandomColor () {
//   const currentColor = getRandomHexColor();
//   refs.color.textContent = currentColor;
//   refs.body.style.background = currentColor;
// }
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// refs.changeColorBtn.addEventListener("click", chanceRandomColor);

