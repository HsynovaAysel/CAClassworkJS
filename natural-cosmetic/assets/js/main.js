let formPro = document.querySelector("#form-products");
let formFoot = document.querySelector("#form-footer");
let h4Elem = document.createElement("h4");
let favorites = getFromLocalStorage();

formPro.addEventListener("submit", function (event) {
  event.preventDefault();

  h4Elem.innerText = "Thanks for filling out the form!";
  h4Elem.style.padding = "10px";
  h4Elem.style.color = "white";
  h4Elem.style.backgroundColor = "#70c770";

  this.append(h4Elem);
});
formFoot.addEventListener("submit", function (event) {
  event.preventDefault();

  h4Elem.innerText = "Thanks for filling out the form!";
  h4Elem.style.padding = "10px";
  h4Elem.style.color = "white";
  h4Elem.style.backgroundColor = "#70c770";

  this.append(h4Elem);
});

let menu = document.querySelector("#menu");
let nav = document.querySelector(".nav-icon");

menu.addEventListener("click", function () {
  nav.classList.toggle("show");
  if (this.classList.contains("fa-bars")) {
    this.classList = "fa-solid fa-xmark";
  } else {
    this.classList = "fa-solid fa-bars";
  }
});
let limit = 3;

let products = document.querySelector(".images");
let loadMore = document.querySelector(".load-more");
let data = null;
async function getData() {
  let res = await axios("http://localhost:8080/products");
  console.log(res.data);
  data = res.data;
  drawCards(res.data.slice(0, limit));
}
getData();

function drawCards(array) {
  products.innerHTML = "";
  array.forEach((el) => {
    let card = document.createElement("div");
    card.className = "image";
    card.innerHTML = ` 
    <img src="${el.image}" alt="" />
    <div class="text">
      <h4>${el.title}</h4>
      <p>$${el.price}.00</p>
      <i class="${
        favorites.find((item) => item.id === el.id)
          ? "fa-solid fa-heart"
          : "fa-regular fa-heart"
      }" onclick=heart(this,${el.id})></i>
    </div>`;
    products.append(card);
  });
}

loadMore.addEventListener("click", loadMoreFunc);
function loadMoreFunc() {
  limit += 3;
  // getData()
  drawCards(data.slice(0, limit));
  if (limit >= data.length) {
    this.remove();
  }
}

let searchInput = document.querySelector("#search");
searchInput.addEventListener("input", function (event) {
  let value = event.target.value;
  let filtered = data.filter((item) =>
    item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
  drawCards(filtered);
});

let heartIcon = document.querySelector(".fa-heart");
let supNum = document.querySelector(".count");



function heart(icon, id) {
  if (icon.className === "fa-solid fa-heart") {
    icon.className = "fa-regular fa-heart";
    favorites = favorites.filter((item) => item.id !== id);
  } else {
    icon.className = "fa-solid fa-heart";
    let find = data.find((item) => item.id === id);
    favorites.push(find);
  }
  count();
  setToLocalStorage(favorites);
}

function setToLocalStorage(arr) {
  localStorage.setItem("favorites", JSON.stringify(arr));
}
function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("favorites")) ?? [];
}

function count() {
  supNum.textContent = favorites.length;
}
count();
