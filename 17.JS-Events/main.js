let divEl = document.querySelector(".test");
let inputTxt = document.querySelector("#input");
let addBtn = document.querySelector(".add");
let ulElem = document.querySelector(".list");

divEl.style.width = "50%";
divEl.style.display = "flex";
divEl.style.justifyContent = "space-between";

inputTxt.style.padding = "8px";
inputTxt.style.width = "500px";

addBtn.style.backgroundColor = "blue";
addBtn.style.color = "white";
addBtn.style.border = "none";
addBtn.style.padding = "10px";
addBtn.style.borderRadius = "5px";

ulElem.style.width = "46%";
ulElem.style.padding = "30px";
ulElem.style.borderRadius = "5px";

addBtn.addEventListener("click", todo);

function todo() {
  if (inputTxt.value != "") {
    let liElem = document.createElement("li");
    let spanElem = document.createElement("span");
    let btnElem = document.createElement("button");
    spanElem.innerText = inputTxt.value;
    btnElem.innerText = "Delete";

    ulElem.style.backgroundColor = "pink";

    liElem.style.listStyle = "none";
    liElem.style.display = "flex";
    liElem.style.justifyContent = "space-between";
    liElem.style.color = "red";
    liElem.style.marginBottom = "20px";

    btnElem.style.backgroundColor = "red";
    btnElem.style.color = "white";
    btnElem.style.border = "none";
    btnElem.style.padding = "10px";
    btnElem.style.borderRadius = "5px";

    btnElem.addEventListener("click", function () {
      btnElem.parentElement.remove();
    });

    liElem.append(spanElem, btnElem);
    ulElem.append(liElem);
    inputTxt.value = "";
  } else {
    alert("Inputun daxilini doldurun");
  }
}
window.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    todo();
  }
});
