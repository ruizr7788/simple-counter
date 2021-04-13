// selectors
const number = document.querySelector(".count");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

let currentCount = 0;

const countDown = () => {
  currentCount--;
  number.textContent = currentCount;
  currentCount < 0 ? (number.style.color = "red") : -1;
  currentCount === 0 ? (number.style.color = "black") : -1;
};
const resetCount = () => {
  currentCount = 0;
  number.textContent = currentCount;
  currentCount === 0 ? (number.style.color = "black") : -1;
};
const countUp = () => {
  currentCount++;
  number.textContent = currentCount;
  currentCount > 0 ? (number.style.color = "green") : -1;
  currentCount === 0 ? (number.style.color = "black") : -1;
};

decrease.addEventListener("click", countDown);
reset.addEventListener("click", resetCount);
increase.addEventListener("click", countUp);
