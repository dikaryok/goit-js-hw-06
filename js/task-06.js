const refs = {
  input: document.querySelector("#validation-input"),
};
refs.input.addEventListener("blur", onInputBlur);
function onInputBlur() {
  if (
    this.getAttribute("data-length") > this.value.length ||
    this.getAttribute("data-length") < this.value.length
  ) {
    this.classList.remove("valid");
    this.classList.add("invalid");
  } else {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
}
