let interval = setInterval(() => {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((res) => res.json())
    .then((data) => {
      // imageElem.setAttribute("src",data.message)
      imageElem.src = data?.message;
    });
}, 2000);

let h1Elem = document.createElement("h1");
let cont = document.querySelector(".container");
let imageElem = document.createElement("img");
h1Elem.innerText = "RANDOM IMAGE";
h1Elem.style.color = "white";
h1Elem.style.textAlign = "center";

cont.style.display = "flex";
cont.style.flexDirection = "column";
cont.style.width = "30%";
cont.style.height = "60%";
imageElem.style.borderRadius = "20px";

imageElem.src =
  "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_11865.jpg";
imageElem.style.width = "100%";
imageElem.style.height = "100%";

document.body.style.background = "linear-gradient(45deg, red, blue)";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

cont.append(h1Elem, imageElem);
