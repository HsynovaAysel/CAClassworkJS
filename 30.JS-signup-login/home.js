let h3 = document.createElement("h3");
let user = localStorage.getItem("username");
h3.innerText = `Welcome ${user}`;
document.body.append(h3);
h3.style.textAlign = "center";
h3.style.color = "red";
h3.style.padding = "30px 0";
