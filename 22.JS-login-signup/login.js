let form = document.createElement("form");
let h1 = document.createElement("h1");
let inputEmail = document.createElement("input");
let inputPassword = document.createElement("input");
let signupBtn = document.createElement("button");
let a = document.createElement("a");
let p = document.createElement("p");

inputEmail.setAttribute('required','null');
inputPassword.setAttribute('required','null');

h1.innerText = "Login";
a.innerText = "Forgot password?";
p.innerHTML = `Dont't have an account? <a href='#' style='text-decoration: none'>Signup</a>`;
inputEmail.placeholder = "Enter Your Email";

inputPassword.placeholder = "Enter Your Password";

signupBtn.innerText = "Login";
a.href = "#";

inputEmail.type = "email";

inputPassword.type = "password";
signupBtn.type = "submit";
document.body.style.backgroundColor = "blue";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
form.style.width = "30%";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.backgroundColor = "white";
form.style.borderRadius = "10px";
form.style.padding = "30px";
h1.style.textAlign = "center";
p.style.textAlign = "center";
a.style.textAlign = "center";
h1.style.padding = "10px 0";

inputEmail.style.margin = "10px 0";

inputPassword.style.margin = "10px 0";

inputEmail.style.padding = "5px 0";

inputPassword.style.padding = "5px 0";
signupBtn.style.margin = "10px 0";
signupBtn.style.border = "none";
signupBtn.style.borderRadius = "5px";
signupBtn.style.backgroundColor = "blue";
signupBtn.style.color = "white";
signupBtn.style.fontSize = "18px";
signupBtn.style.padding = "5px";
a.style.textDecoration = "none";

let falseText = document.createElement('p');
falseText.innerText="Password ve ya Email yanlisdir!"
falseText.setAttribute=('class','false')
falseText.style.color='red'
falseText.style.textAlign='center'
falseText.style.display='none'




let userObj = JSON.parse(localStorage.getItem("userObj"));
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let user = userObj.find(
    (item) =>
      item.email === inputEmail.value && item.password === inputPassword.value
  );
  if (user) {
    window.location = "home.html";
    falseText.style.display='none'
    localStorage.setItem('username',user.userName)
 
  } else {
    falseText.style.display='block'
    // window.alert("email ve password yanlisdi");
  }
});









form.append(
  h1,
  inputEmail,
  inputPassword,
  a,
  signupBtn,
  p,
  falseText
);
document.body.append(form);
