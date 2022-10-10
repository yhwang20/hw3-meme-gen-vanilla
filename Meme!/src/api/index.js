import axios from "axios";

const memeAPI = "https://api.imgflip.com/get_memes";

export async function generateMeme(images) {
  try {
    const image = await images[Math.floor(Math.random() * images.length)];
    return image;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchMemes() {
  try {
    const response = await axios.get(`${memeAPI}`);
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}