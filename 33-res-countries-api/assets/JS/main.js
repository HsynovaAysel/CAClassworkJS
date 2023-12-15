let icon = document.querySelector(".icon-text");
let banner = document.querySelector(".banner");
let input = document.querySelector("#search");
let select = document.querySelector("select");
let spinner = document.querySelector(".spinner-border");

let data = null;
let mode = localStorage.getItem("dark");

if (mode === "true") {
  document.body.classList.add("dark-mode");
}

icon.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (mode === "true") {
    localStorage.setItem("dark", false);
  } else {
    localStorage.setItem("dark", true);
  }
});

async function getData(endPoint) {
  spinner.style.display = "block";
  let res = await axios(`https://restcountries.com/v2/${endPoint}`);
  //   console.log(res.data);
  data = res.data;
  drawCards(res.data);
  spinner.style.display = "none";
}

getData("all");
function drawCards(array) {
  banner.innerHTML = "";
  array.forEach((el) => {
    // console.log(el.name);
    banner.innerHTML += `
        <div class="col col-12 col-md-6 col-lg-3">
        <a href="./details.html?name=${el.name}"
        ><div class="card" style="width:80%;">
        <img src="${el.flag}" class="card-img-top" alt="..." />
          <div class="card-body" >
            <h3>${el.name}</h3>
            <p>Population: <span>${el.population}</span></p>
            <p>Region: <span>${el.region}</span></p>
            <p>Capital: <span>${el.capital}</span></p>
          </div></div
      ></a></div>
        `;
  });
}

input.addEventListener("input", function (e) {
  let filtered = data.filter((item) =>
    item.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  console.log(filtered);
  drawCards(filtered);
});

select.addEventListener("change", function (e) {
  if (e.target.value === "All") {
    getData("all");
  } else {
    getRegion(e.target.value);
  }
});
async function getRegion(region) {
  let res = await axios(`https://restcountries.com/v2/region/${region}`);
  console.log(res.data);
  drawCards(res.data);
}
