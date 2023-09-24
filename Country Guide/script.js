let searchBtn = document.getElementById("search-btn");
let searchInput = document.getElementById("country-search");

searchBtn.addEventListener("click", () => {
    let countryName = searchInput.value;
    
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        result.innerHTML=`
        <img src="${data[0].flags.svg}"
        class = "flag-img">
        <h1>${data[0].name.common}</h1><br>
        <p><b>Capital:</b> ${data[0].capital}</p>
        <p><b>Region:</b> ${data[0].region}</p>
        <p><b>Population:</b> ${data[0].population}</p>
        <p><b>Language:</b> ${Object.values(data[0].languages)}</p>
        <p><b>Currency:</b> ${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</p>
        <p><b>Timezone:</b> ${Object.values(data[0].timezones)}</p> 
       `;
});
});