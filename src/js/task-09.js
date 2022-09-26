
const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRangomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}



// const bodyRef = document.querySelector('body');
// const changeColorBtn = document.querySelector('.change-color');
// const spanColor = document.querySelector('.color')

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const chanceRandomColor = (event) => {
//   event.preventDefault();
//   spanColor.textContent = getRandomHexColor();
//     bodyRef.style.background = getRandomHexColor();
// }
// changeColorBtn.addEventListener("click", chanceRandomColor);



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

