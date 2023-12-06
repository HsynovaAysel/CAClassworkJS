

let products = document.querySelector(".products");
let h3 = document.querySelector(".heading");
let electronicsBtn  = document.querySelector(".electronics");
let jeweleryBtn  = document.querySelector(".jewelery");
let mensClothingBtn  = document.querySelector(".mens-clothing");
let womensClothingBtn  = document.querySelector(".womens-clothing");

let BASE_URL=`https://fakestoreapi.com/products`

async function getData(endPoint='') {
const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  drawCards(response.data)
}
getData();


function drawCards(array) {
  products.innerHTML = "";
  array.forEach((element) => {
    products.innerHTML += `
    <div class="col col-12 col-md-6 col-lg-4">
          <div class="card" style="width: 18rem;" >
            <img src="${element.image}" class="card-img-top" alt="..." style=" height:100% ;" />
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.price}$</p>
              <a href="details.html?id=${element.id}" class="btn btn-primary">Details</a>
            </div>
          </div>
        </div>
    `;
  });
}


electronicsBtn.addEventListener('click',function() {
    getData("category/electronics")
    h3.innerText='Electronics'
})
jeweleryBtn.addEventListener('click',function() {
    getData("category/jewelery")
    h3.innerText='Jewelery'
})
mensClothingBtn.addEventListener('click',function() {
    getData("category/men's clothing")
    h3.innerText='Mens clothing'
})
womensClothingBtn.addEventListener('click',function() {
    getData("category/women's clothing")
    h3.innerText='Womens clothing'
})