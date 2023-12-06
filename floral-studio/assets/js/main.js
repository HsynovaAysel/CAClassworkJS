// Cards
let pricing= document.querySelector('.flowers-pricing-image')
async function getData () {
    let res = await axios(`http://localhost:8080/products`)
    console.log(res.data);
    drawCards(res.data)
}

getData()
function drawCards(array) {
    pricing.innerHTML=""
    array.forEach(el => {
        pricing.innerHTML+=`<div class="card-image">
        <img src="${el.image}" alt="">
      <div class="title-icon">
      <h3>${el.title}</h3>
      <i class="${
        favorites.find((item) => item.id === el.id)
          ? "fa-solid fa-heart"
          : "fa-regular fa-heart"
      }" onclick=heart(this,${el.id})></i>
        </div>
        <p>$${el.price}</p>
      </div>`
    });
}


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

// navBar
let nav=document.querySelector('nav')
let menuIcon=document.querySelector('.fa-bars')

menuIcon.addEventListener('click',function () {
    nav.classList.toggle("show");
if(menuIcon.classList.contains('fa-bars')){
    menuIcon.className='fa solid fa-xmark'  
}else{
    menuIcon.className='fa solid fa-bars'
}    
})