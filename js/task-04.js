const buttonDecrement = document.querySelector("button[data-action=decrement]");
const buttonIncrement = document.querySelector("button[data-action=increment]");
const outputСounter = document.querySelector("#value");

buttonDecrement.addEventListener("click", hendlerButtonDecrementClick);
buttonIncrement.addEventListener("click", hendlerButtonIncrementClick);

let counterValue = 0;

function hendlerButtonDecrementClick() {
  counterValue -= 1;
  outputСounter.textContent = counterValue;
}
function hendlerButtonIncrementClick() {
  counterValue += 1;
  outputСounter.textContent = counterValue;
}
