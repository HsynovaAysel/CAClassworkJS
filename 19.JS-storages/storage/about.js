let tbody = document.querySelector("tbody");

let allUsers = JSON.parse(localStorage.getItem("allUsers"));

function drowTable(allUsers) {
  allUsers.forEach((data) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML = `
    <td>${data.id}</td>
    <td>${data.firstName}</td>
    <td>${data.lastName}</td>
    <td>${data.address}</td>`;
    tbody.append(trElem);
  });
}
drowTable(allUsers);
