let content = document.querySelector(".content");
let box = document.querySelector(".box");
let input = document.querySelector("input");
let btn = document.querySelector("button");

function draw(curCity) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`
  )
    .then((res) => res.json())
    .then(
      (data) =>
        (content.innerHTML = ` <p class="country">${data.location.country}</p>
        <img src="${data.current.condition.icon}" alt="">
                        <p class="text">${data.current.condition.text}</p>
                        <p class="temp_c">${data.current.temp_c}</p>
                        <p class="feelslike_c">${data.current.feelslike_c}</p>
                        <p class="humidity">${data.current.humidity}</p>`)
    );
}
draw("Baku");

btn.addEventListener("click", function () {
  draw(input.value);
  input.value = "";
});
box.append(content);
