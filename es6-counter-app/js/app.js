const { use } = require("react");

let count = 0;
let username = "John";
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

const updateDisplay = () => {
  username = username.toUpperCase();
  countDisplay.textContent = count;
};

const increaseCount = () => {
  count++;
  updateDisplay();
};

const decreaseCount = () => {
  count--;
  updateDisplay();
};

const resetCount = () => {
  count = 0;
  updateDisplay();
};

increaseBtn.addEventListener("click", increaseCount);
decreaseBtn.addEventListener("click", decreaseCount);
resetBtn.addEventListener("click", resetCount);