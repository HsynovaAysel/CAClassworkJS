//task1
// let bgBtn = document.querySelector(".bg-btn");
// let parEl = bgBtn.parentElement;

// let attribute = parEl.setAttribute("class", "bg-color");
// bgBtn.addEventListener("click", function () {
//   parEl.style.backgroundColor = "cyan";
//   parEl.style.width = "200px";
//   parEl.style.height = "200px";
//   parEl.style.position = "relative";
//   bgBtn.style.position = "absolute";
//   bgBtn.style.bottom = "5px";
//   bgBtn.style.right = "5px";
// });

//task2
// let lightBtn = document.querySelector(".light-btn");
// lightBtn.addEventListener("click", function () {
//   document.body.classList.toggle("bg-teal");
// });
//task3
// let imgEl = document.createElement("img");
// imgEl.style.width='500px'
// imgEl.style.height='500px'
// imgEl.setAttribute(
//   "src",
//   "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
// );
// document.body.append(imgEl)
// //task4
// let city = ["Ganja", "Goranboy", "Baki", "Shamkir", "Yevlakh"];
// let ulElem = document.createElement("ul");
// city.forEach((el, i) => {
//   let liElem = document.createElement("li");

//   liElem.style.listStyle = "none";
//   liElem.innerText = `${i}. ${el}`;
//   ulElem.append(liElem);
//   liElem.addEventListener("click", function () {
//     this.remove();
//   });
// });
// document.body.append(ulElem);
//task5

let cont = document.querySelector(".container");
let logo = document.createElement("h3");
logo.innerText = "LOGOBAKERY";
logo.style.color = "white";
cont.style.backgroundColor = "black";
cont.style.padding = "10px 50px";
let navElem = document.createElement("nav");
cont.style.display = "flex";
cont.style.justifyContent = "space-between";
let ulElem = document.createElement("ul");
let button = document.createElement("button");
button.innerText = "Contact";
navElem.append(ulElem);
let arr = ["Services", "Projects", "About"];
arr.forEach((el) => {
  let liElem = document.createElement("li");
  liElem.innerText = el;
  liElem.style.color = "white";
  liElem.style.listStyle = "none";
  ulElem.append(liElem);
});
cont.append(logo, navElem, button);
