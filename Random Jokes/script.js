const jokeGenerator = document.getElementById("joke");
const jokeBtn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeGenerator.textContent = `${item.joke}`
    });
};
getJoke();
jokeBtn.addEventListener("click", getJoke);
