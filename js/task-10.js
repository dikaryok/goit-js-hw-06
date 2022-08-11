function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputNumber: document.querySelector("input"),
  dataCreateBtn: document.querySelector("[data-create]"),
  dataDestroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.dataCreateBtn.addEventListener("click", createBoxes);
refs.dataDestroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  let amount = refs.inputNumber.value;
  gerNumber(amount);
}

function gerNumber(amount) {
  let boxSise = 30;
  let box = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = boxSise + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    box.appendChild(div);
  }
  refs.boxes.appendChild(box);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
