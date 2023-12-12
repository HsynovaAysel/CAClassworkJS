let form = document.querySelector("form");
let inputName = document.querySelector(".username");
let inputEmail = document.querySelector(".email");
let inputPassword = document.querySelector(".password");
let userObj = JSON.parse(localStorage.getItem("userObj")) || [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let bool = userObj.some(
    (item) =>
      item.userName === inputName.value || item.email === inputEmail.value
  );
  if (!bool) {
    let obj = {
      userName: inputName.value,
      email: inputEmail.value,
      password: inputPassword.value,
      id: Date.now(),
    };
    userObj.push(obj);
    localStorage.setItem("userObj", JSON.stringify(userObj));
    window.location = "login.html";
  } else {
    window.alert("bu email'da ve ya ad'da istifadeci var!");
  }

  inputName.value = "";
  inputEmail.value = "";
  inputPassword.value = "";
});
