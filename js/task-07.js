const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", onInputSlider);

function onInputSlider(event) {
  span.setAttribute(
    "style",
    `font-size:${event.currentTarget.valueAsNumber}px`
  );
}
