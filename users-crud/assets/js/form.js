let id = new URLSearchParams(window.location.search).get("id");
let BASE_URL = `http://localhost:8080/users`;
let firstNameInput = document.querySelector("#first-name");
let lastNameInput = document.querySelector("#last-name");
let emailInput = document.querySelector("#email");
let fileInput = document.querySelector("#file");
let goBackBtn = document.querySelector("#go-back");
let form = document.querySelector("form");

goBackBtn.addEventListener("click", function () {
  window.history.back();
});

async function getData() {
  let res = await axios(`${BASE_URL}/${id}`);
  emailInput.value = `${res.data.email}`;
  firstNameInput.value = `${res.data.name}`;
  lastNameInput.value = `${res.data.surname}`;
  fileInput.value=`${res.data.userphoto}`

}
if(id){
  getData();  
}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  let date = new Date();
  let obj = {
    date: date.toLocaleString(),
    email: emailInput.value,
    name: firstNameInput.value,
    surname: lastNameInput.value,
    userphoto: `./assets/img/${fileInput.value.split("\\")[2]}`,
  };

  if (!id) {
    addData(obj);
  } else {
    updateData(obj);
  }
  
});

async function addData(obj) {
  await axios.post(`${BASE_URL}/`, obj);
  window.location='./index.html'
}
async function updateData(obj) {
  await axios.patch(`${BASE_URL}/${id}`, obj);
  window.location='./index.html'
}
