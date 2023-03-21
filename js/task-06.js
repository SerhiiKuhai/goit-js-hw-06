const input = document.querySelector("#validation-input");
const inputAttribute = Number(input.getAttribute("data-length"));

input.addEventListener("blur", onInputSymbols);

function onInputSymbols(event) {
  input.classList.add("invalid");
  if (input.value.length === inputAttribute) {
    input.classList.replace("invalid", "valid");
  }
}
