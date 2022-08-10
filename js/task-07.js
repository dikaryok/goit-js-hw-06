const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

function changeTextSise() {
  span.style.fontSize = `${input.value}px`;
}
input.addEventListener("input", changeTextSise);
