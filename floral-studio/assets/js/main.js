
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
        <h3>${el.title}</h3>
        <p>$${el.price}</p>
      </div>`
    });
}