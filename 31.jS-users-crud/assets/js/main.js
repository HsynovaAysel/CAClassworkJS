let tbody = document.querySelector("tbody");
let BASE_URL = `http://localhost:8080/users`;
async function getData() {
  let res = await axios(`${BASE_URL}`);
  console.log(res.data);
  drawTable(res.data);
}
getData();

function drawTable(arr) {
  console.log(arr);
  tbody.innerHTML = "";
  arr.forEach((el) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML += `
        <td>${el.id}</td>
    <td><img src="${el.userphoto}" alt=""></td>
    <td>${el.name}</td>
    <td>${el.surname}</td>
    <td>${el.email}</td>
    <td>${el.date}</td>
    <td><a href="./form.html?id=${el.id}" class="btn btn-success">Edit</a> 
    <button class="btn btn-danger" onclick="dataDelete(${el.id}),this">Delete</button> 
    <button class="btn btn-primary" onclick="addToFavBtn(${el.id},this)">Add Fav</button></td>
`;
    tbody.append(trElem);
  });
}
async function dataDelete(id, btn) {
  if (confirm("are u sure to delete supplier??")) {
    btn.closest("tr").remove();
    await axios.delete(`${BASE_URL}/${id}`);
  }
}

let users = JSON.parse(localStorage.getItem("users")) || [];
async function addToFavBtn(id,btn) {
  let res = await axios(`${BASE_URL}/${id}`);
  let result= users.find((item) => item.id === id);
  if (!result) {
    users.push(res.data);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    window.alert("artiq Favorite sehifesinde var");
  }
}
