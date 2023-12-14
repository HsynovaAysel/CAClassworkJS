let searchInput = document.querySelector("#serach-input");
let meaning = document.querySelector(".meaning");
let form = document.querySelector("form");
let icon = document.querySelector("i");

async function getData(word) {
  let res = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  console.log(res.data[0].phonetics[0].audio);
  data = res.data[0];
  drawCards(data);
}

function drawCards(data) {
  meaning.innerHTML = `
    <div class="volume">
                <p class="text">${data.word} ${data.phonetic}</p>
                <i class="fa-solid fa-volume-low" onclick="playAudio(this)" ><audio src="${
                  data.phonetics[0].audio
                }"></audio></i>
            </div>
            <div class="mean">
            <p class="definition">Definition   <span>(${
              data.meanings[0].partOfSpeech
            })</span></p>
              <p class="word">${data.meanings[0].definitions[0].definition.slice(
                0,
                30
              )}...</p>
            </div> 
    `;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  getData(searchInput.value);
});

function playAudio(icon) {
  icon.querySelector("audio").play();
  icon.className = "fa-solid fa-volume-high";
}

searchInput.addEventListener("input", function (e) {
  if (e.target.value === "") {
    meaning.innerHTML = "";
  }
});
