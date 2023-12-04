let products = document.querySelector(".products-div");
let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");

fetch(`https://api.escuelajs.co/api/v1/products`)
  .then((response) => response.json())
  .then((data) => {
    drawCards(data);
  })
  .catch((err) => console.log(err));

function drawCards(array) {
  products.innerHTML = "";
  array.forEach((el) => {
    products.innerHTML += `<div class="product">
            <div class="product-image">
              <img src=" ${el.images}" style="width: 100%" alt="" />
            </div>
            <div class="product-heading">
              <p class="title">${el.title}</p>
              <p class="description">${el.description}</</p>
              <span>${el.price}</</span>
              <div><button class="deleteBtn" onclick=cardDelete(this,${el.id})>Delete</button></div>
            </div>
          </div>`;
  });
}

function cardDelete(btn, id) {
  if (confirm("card silinecek!")) {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      method: "DELETE",
    });
    btn.closest(".product").remove();
  }
}


let addBtn=document.querySelector(".addBtn")

addBtn.addEventListener("click", function (event) {
  event.preventDefault();

  let obj = {
    title: allInputs[0].value,
    price: allInputs[1].value,
    description: allInputs[2].value,
    images: allInputs[3].value,
  };

  fetch(`https://api.escuelajs.co/api/v1/products`,{
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(() => {
    fetch(`https://api.escuelajs.co/api/v1/products`)
      .then((response) => response.json())
      .then((data) => {
        drawCards(data);
      })
      .catch((err) => console.log(err));
  });

  allInputs.forEach((item) => (item.value = ""));
});
