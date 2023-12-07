let content = document.querySelector(".content");

let BASE_URL = `http://localhost:8080`;

let id = new URLSearchParams(window.location.search).get("id");

async function getData(endPoint, id) {
  let res = await axios(`${BASE_URL}/${endPoint}/${id}`);
  content.innerHTML = `
<div class="card">
        <h5>${res.data.title}</h5>
        <span>${res.data.body} </span>
        <p>${res.data.author}</p>
        <button onclick="goBack()">Go Back</button>
   
      </div> 
`;
}
getData("blogs", id);



function goBack() {
    window.history.back()
    console.log('salam');
}