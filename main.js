const memeAPI = "https://api.imgflip.com/get_memes";
const topInput = document.getElementById("top-input");
const bottomInput = document.getElementById("bottom-input");
const img = document.getElementById("img");
const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");
const goBtn = document.getElementById("go-btn");
goBtn.addEventListener("click", fetchMemes);

function generateMeme(images) {
  const image = images[Math.floor(Math.random() * images.length)]; 
  img.src = image.url;
  topText.innerText = topInput.value;
  bottomText.innerText = bottomInput.value;
}

function fetchMemes(event) {
  event.preventDefault();
  fetch(`${memeAPI}`)
    .then((response) => response.json())
    .then(data => generateMeme(data.data.memes))
    .catch(err => console.log(err));
}
