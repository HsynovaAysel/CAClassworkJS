let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submitBtn = document.querySelector(".submitBtn");
let form = document.querySelector("form");

form.addEventListener("submit", toDo);

function toDo(event){
event.preventDefault();
  if (username.value !== "" && email.value !== "" && password.value !== "") {
    let user = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    console.log(user);
    username.value = "";
    email.value = "";
    password.value = "";
  } else {
    alert("bos qoymaa!");
  }
}

window.addEventListener("keyup", function (event) {
    if (event.code === "Enter") {
      toDo();
    }
  });