const container = document.querySelector(".container");

const URL = `https://randomfox.ca/images/`;

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function loadImage(numImage = 6) {
  let i = 0;
  while (i < numImage) {
    const img = document.createElement("img");
    img.src = `${URL}${getRandomNumber()}.jpg`;
    container.appendChild(img);
    i++;
  }
}

loadImage()
window.addEventListener('scroll', ()=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImage()
    }
})
