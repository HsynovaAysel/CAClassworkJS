let btn = document.querySelector(".btn");

let mode = localStorage.getItem("dark");
if (mode === "true") {
  document.body.classList.add("dark-mode");
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (mode === "true") {
    localStorage.setItem("dark", false);
  } else {
    localStorage.setItem("dark", true);
  }
});
