let key = document.querySelectorAll(".key");
let words = document.querySelector(".words");
let space = document.querySelector(".space");
let backspace = document.querySelector(".backspace");

window.addEventListener("keydown", function (e) {
  console.log(e);

  key.forEach((item) => {
    if (item.innerText == e.key) {
      item.style.opacity = "0";
      item.style.backgroundColor = "#06c06f";
      item.style.transform = "scale(1.3)";
      item.style.transition = "150ms";
      words.textContent += `${item.innerText}`;
    }
  });

  if (e.code === "Space") {
    space.style.opacity = "0";
    space.style.backgroundColor = "#06c06f";
    space.style.transform = "scale(1.3)";
    space.style.transition = "150ms";
    words.textContent += e.key;
  }

  if (e.code === "Backspace") {
    backspace.style.opacity = "0";
    backspace.style.backgroundColor = "#06c06f";
    backspace.style.transform = "scale(1.3)";
    backspace.style.transition = "150ms";
    words.innerText = words.innerText.slice(0, -1);
  }
});

window.addEventListener("keyup", function (e) {
  if (e.code === "Space") {
    space.style.opacity = "1";
    space.style.backgroundColor = "darkcyan";
    space.style.transform = "scale(1)";
    words.textContent += e.key;
  }
  if (e.code === "Backspace") {
    backspace.style.opacity = "1";
    backspace.style.backgroundColor = "darkcyan";
    backspace.style.transform = "scale(1)";
  }

  key.forEach((item) => {
    if (item.innerText == e.key) {
      item.style.opacity = "1";
      item.style.backgroundColor = "darkcyan";
      item.style.transform = "scale(1)";
    }
  });
});
