let nameValue = new URLSearchParams(window.location.search).get("name");
let icon = document.querySelector(".icon-text");
let banner = document.querySelector(".banner");
let btn = document.querySelector(".back-go");
let mode = localStorage.getItem("dark");
console.log(nameValue);
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
async function data() {
  let res = await axios(`https://restcountries.com/v3.1/name/${nameValue}`);
  console.log(res);
  banner.innerHTML = `
          <div class="card" style="width:50%;">
          <img src="${res.data[0].flags.svg}" class="card-img-top" alt="..." />
            <div class="card-body" >
              <h3>${res.data[0].name.common}</h3>
              <p>Population: <span>${res.data[0].population}</span></p>
              <p>Region: <span>${res.data[0].region}</span></p>
              <p>Sub Region: <span>${res.data[0].subregion}</span></p>
              <p>Capital: <span>${res.data[0].capital}</span></p>
            </div></div
        
          `;
}
data();
btn.addEventListener("click", function () {
  window.history.back();
});
