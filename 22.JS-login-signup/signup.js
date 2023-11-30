let form = document.createElement("form");
let h1 = document.createElement("h1");
let inputName = document.createElement("input");
let inputEmail = document.createElement("input");
let inputNumber = document.createElement("input");
let inputPassword = document.createElement("input");
let signupBtn = document.createElement("button");
let p = document.createElement("p");


inputEmail.setAttribute('required','null');
inputPassword.setAttribute('required','null');
inputName.setAttribute('required','null');
inputNumber.setAttribute('required','null');

h1.innerText = "Signup";

p.innerHTML = `Already have an account ? <a href='#' style='text-decoration: none'>Login</a>`;
inputName.placeholder = "Enter Your Username";
inputEmail.placeholder = "Enter Your Email";
inputNumber.placeholder = "Enter Your Phone Number";
inputPassword.placeholder = "Enter Your Password";

signupBtn.innerText = "Signup";

inputName.type = "text";
inputEmail.type = "email";
inputNumber.type = "tel";
inputPassword.type = "password";
signupBtn.type = "submit";
document.body.style.backgroundColor='blue'
document.body.style.height='100vh'
document.body.style.display='flex'
document.body.style.alignItems='center'
document.body.style.justifyContent='center'
form.style.width = "30%";
form.style.display= "flex";
form.style.flexDirection= "column";
form.style.backgroundColor= "white";
form.style.borderRadius= "10px";
form.style.padding= "30px";
h1.style.textAlign= "center";
p.style.textAlign= "center";

h1.style.padding= "10px 0";
inputName.style.margin= "10px 0";
inputEmail.style.margin= "10px 0";
inputNumber.style.margin= "10px 0";
inputPassword.style.margin= "10px 0";
inputName.style.padding= "5px 0";
inputEmail.style.padding= "5px 0";
inputNumber.style.padding= "5px 0";
inputPassword.style.padding= "5px 0";
signupBtn.style.margin= "10px 0";
signupBtn.style.border= "none";
signupBtn.style.borderRadius= "5px";
signupBtn.style.backgroundColor= "blue";
signupBtn.style.color= "white";
signupBtn.style.fontSize= "18px";
signupBtn.style.padding= "5px";







let userObj = JSON.parse(localStorage.getItem("userObj")) || [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let bool = userObj.some(
    (item) =>
      item.userName === inputName.value ||
      item.email === inputEmail.value ||
      item.number === inputNumber.value
  );
  if (!bool) {
    let obj = {
      userName: inputName.value,
      email: inputEmail.value,
      number: inputNumber.value,
      password: inputPassword.value,
      id: Date.now(),
    };
    userObj.push(obj);

    localStorage.setItem("userObj", JSON.stringify(userObj));
      window.location='login.html'
      localStorage.setItem("username", JSON.stringify());
  } else {
    window.alert("!!!");
  }

  inputName.value = "";
  inputEmail.value = "";
  inputNumber.value = "";
  inputPassword.value = "";
});

form.append(
  h1,
  inputName,
  inputEmail,
  inputNumber,
  inputPassword,
  signupBtn,
  p
);
document.body.append(form);
