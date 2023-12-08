let tBody = document.querySelector("tbody");
let input = document.querySelector("#search");
let BASE_URL = `http://universities.hipolabs.com/search?country=Azerbaijan`;
let loading = document.querySelector(".spinner-border");
async function getData() {
  try {
    loading.classList.add("show");
    let res = await axios(`${BASE_URL}`);
    drawTable(res.data);
  } catch (error) {
  } finally {
    loading.classList.remove("show");
  }
}
getData();

function drawTable(array) {
  tBody.innerHTML = "";
  array.forEach((e) => {
    trElem = document.createElement("tr");
    trElem.innerHTML = `
    <td>${e.name}</td>
    <td>${e.country}</td>
    <td>${e.domains}</td>
    <td><a href="${e.web_pages}">${e.web_pages}</a></td>
       `;
    tBody.append(trElem);
  });
}

input.addEventListener("input", function (e) {
  fetch(`${BASE_URL}&name=${e.target.value.toLocaleLowerCase()}`)
    .then((res) => res.json())
    .then((data) => {
      loading.classList.add("show");
      drawTable(data);
    })
    .catch()
    .finally(() => loading.classList.remove("show"));
});
