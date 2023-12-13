let content = document.querySelector(".content");
let BASE_URL = `http://localhost:8080`;

async function getData(endPoint) {
  let res = await axios(`${BASE_URL}/${endPoint}`);
  console.log(res.data);
  data(res.data);
}

getData("blogs");

function data(arr) {
  content.innerHTML = "";

  arr.forEach((element) => {
    content.innerHTML += `
        <div class="card">
        <h5>${element.title}</h5>
        <span>${element.body.slice(0, 5)}... <a href="./details.html?id=${
      element.id
    }">Read More</a></span>
        <p>${element.author}</p>
        <button onclick="deleteData(this,${element.id})">Delete</button>
        <a href="./blog.html?id=${element.id}">Edit</a>
      </div>
        `;
  });
}

async function deleteData(btn, id) {
  if (confirm("are u sure to delete supplier??")) {
    await axios.delete(`${BASE_URL}/blogs/${id}`);
  }
}
