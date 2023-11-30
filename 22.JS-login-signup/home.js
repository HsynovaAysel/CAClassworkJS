let h1 = document.createElement("h1");
let user = localStorage.getItem("username");
h1.innerText = `Welcome ${user}`;
document.body.append(h1);
