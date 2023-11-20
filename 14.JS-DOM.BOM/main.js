// let count = 1;
// let interval = setInterval(() => {
//   console.log(count++);
// }, 1000);
// setTimeout(() => {
//   clearTimeout(interval);
// }, 4000);

// let txt = document.querySelector(".text");
// let clickBtn = document.querySelector(".btn");

// clickBtn.addEventListener("click", () => {
//   txt.innerText = "gwp202"
//   txt.style.color = "red";
//   txt.style.fontSize='3rem'
// });

// let allText = document.querySelectorAll(".text");
// // console.log(allText[0]);
// allText.forEach((el) => {
//   console.log(el.innerText);
// });

// let str = "developer";
// let count = 1;
// let interval = setInterval(() => {
//   if (count <= str.length) {
//     console.log(
//       (str = str.slice(0, count).toLocaleUpperCase() + str.slice(count))
//     );
//     count++;
//   } else {
//     clearInterval(interval);
//   }
// }, 1000);
let arr = [
  "red",
  "blue",
  "yellow",
  "blueviolet",
  "green",
  "black",
  "teal",
  "cyan",
];

// let colorBtn = document.querySelector(".color-btn");
// colorBtn.addEventListener("click", () => {
//   document.body.style.backgroundColor =
//     arr[Math.floor(Math.random() * arr.length)];
// });

let interval = setInterval(() => {
  document.body.style.backgroundColor =
    arr[Math.floor(Math.random() * arr.length)];
}, 1000);

setTimeout(() => {
  clearTimeout(interval);
}, 10000);
