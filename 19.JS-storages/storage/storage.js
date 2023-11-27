let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let address = document.querySelector("#address");
let form = document.querySelector("#form");

let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userObj = {
    id: Date.now(),
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
  };

  allUsers.push(userObj);
  localStorage.setItem("allUsers", JSON.stringify(allUsers));

  firstName.value = "";
  lastName.value = "";
  address.value = "";
});
