let form = document.querySelector("form");
let inputEmail = document.querySelector(".email");
let inputPassword = document.querySelector(".password");
let icon = document.querySelector(".fa-solid");
let userObj = JSON.parse(localStorage.getItem("userObj"));
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let user = userObj.find(
    (item) =>
      item.email === inputEmail.value && item.password === inputPassword.value
  );
  if (user) {
    window.location = "home.html";
    localStorage.setItem("username", user.userName);
  } else {
    window.alert("email ve password yanlisdi");
  }
});

icon.addEventListener("click", function () {
  if (icon.className === "fa-solid fa-eye") {
    icon.className = "fa-solid fa-eye-slash";
    inputPassword.type = "text";
  } else {
    icon.className = "fa-solid fa-eye";
    inputPassword.type = "password";
  }
});
