let favoritesList = document.querySelector(".favorites");
let favorites = getFromLocalStorage();

function drawCards(array) {
  favoritesList.innerHTML = "";
  array.forEach((el) => {
    let card = document.createElement("div");
    card.className = "image";
    card.innerHTML = ` 
      <img src="${el.image}" alt="" />
      <div class="text">
        <h4>${el.title}</h4>
        <p>$${el.price}.00</p>
        <i class="fa-solid fa-heart" onclick=heartClick(this,${el.id}) ></i>
      </div>`;
    favoritesList.append(card);
  });
}
drawCards(favorites)

function heartClick(icon, id) {
  filter = favorites.filter((item) => item.id != id);
  setToLocalStorage(filter);
  icon.parentElement.parentElement.remove();
}

function setToLocalStorage(arr) {
  localStorage.setItem("favorites", JSON.stringify(arr));
}
function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("favorites"));
}
