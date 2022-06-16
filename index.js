const memeApiUrl = "https://api.imgflip.com/get_memes";
let memeData;
const memeOftheDay = document.getElementById("meme-of-the-day-img");

fetch(memeApiUrl)
  .then((res) => res.json())
  .then((data) => renderMeme(data));

function renderMeme(meme) {
  // memeData = meme;
  let memesArr = meme.data.memes;
  let rando = Math.floor(Math.random() * memesArr.length);
  console.log(rando);
  memeOftheDay.src = memesArr[rando].url;
  memeOftheDay.style.height = 316;
  memeOftheDay.style.width = 420;
  console.log(meme);
}
