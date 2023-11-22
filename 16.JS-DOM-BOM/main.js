let startBtn = document.querySelector(".start");
let numTxt = document.querySelector(".number-text");
let stopBtn = document.querySelector(".stop");
let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");
let resetBtn = document.querySelector(".reset");
let incrementInput = document.getElementById("increment-input");
let incValueBtn = document.querySelector(".increment-value");
let decrementInput = document.getElementById("decrement-input");
let decValueBtn = document.querySelector(".decrement-value");
startBtn.style.backgroundColor = "green";
startBtn.style.border = "none";
startBtn.style.padding = "8px 30px";
startBtn.style.color = "white";
startBtn.style.fontSize = "18px";

stopBtn.style.backgroundColor = "red";
stopBtn.style.border = "none";
stopBtn.style.padding = "8px 30px";
stopBtn.style.color = "white";
stopBtn.style.fontSize = "18px";

numTxt.style.fontSize = "25px";
numTxt.style.color = "blue";

decrementBtn.style.backgroundColor = "teal";
decrementBtn.style.border = "none";
decrementBtn.style.padding = "8px 30px";
decrementBtn.style.color = "white";
decrementBtn.style.fontSize = "18px";

incrementBtn.style.backgroundColor = "teal";
incrementBtn.style.border = "none";
incrementBtn.style.padding = "8px 30px";
incrementBtn.style.color = "white";
incrementBtn.style.fontSize = "18px";

resetBtn.style.backgroundColor = "red";
resetBtn.style.border = "none";
resetBtn.style.padding = "8px 30px";
resetBtn.style.fontSize = "18px";

incValueBtn.style.backgroundColor = "yellow";
incValueBtn.style.border = "none";
decValueBtn.style.backgroundColor = "yellow";
decValueBtn.style.border = "none";



let count = 0;
let startInterval;

startBtn.addEventListener("click", function () {
  this.setAttribute("disabled", null);
  stopBtn.removeAttribute("disabled");
  startInterval = setInterval(() => {
    numTxt.innerText = count;
    count++;
  }, 300);
});
stopBtn.addEventListener("click", function () {
  clearInterval(startInterval);
  this.setAttribute("disabled", null);
  startBtn.removeAttribute("disabled");
});
incrementBtn.addEventListener("click", function () {
  numTxt.innerText = count;
  count++;
});

decrementBtn.addEventListener("click", function () {
  numTxt.innerText = count;
  count--;
});

resetBtn.addEventListener("click", function () {
  result = 0;
  numTxt.innerText = result;
  clearInterval(startInterval);
  startBtn.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");
});
incValueBtn.addEventListener("click", function () {
  count += +incrementInput.value;
  numTxt.innerText = count;
});
decValueBtn.addEventListener("click", function () {
  count -= +decrementInput.value;
  numTxt.innerText = count;
});
