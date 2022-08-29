let searchBtn = document.getElementById("search-btn");
let country = document.getElementById("country");

searchBtn.addEventListener("click", () => {
  let countryName = country.value;
  let finalURL = `https://restcountries.com/v3.1/all`;

  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //console.log(data[0].name);
      //console.log(data[0].capital);
      //console.log(data[0].population);
      //console.log(data[0].flags.svg);
      //console.log(data[0].name.common);
      //console.log(data[0].continents[0]);
      //console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      //console.log(
      //  Object.values(data[0].languages).toString().split(",").join(", ")
      //);
      //console.log(countryName);

      for (let i = 0; i < data.length; i++) {
        if (
          data[i].name.common == countryName ||
          data[i].name.common.toLowerCase() === countryName
        ) {
          console.log(data[i]);
          result.innerHTML = `
<img src=${data[i].flags.svg} class="flag-img" />
<h2>${data[i].name.common}</h2>
<div class="wrapper">
    <div class="data-wrapper">
        <h4>Capital:</h4>
        <span>${data[i].capital[0]}</span>
    </div>
    <div class="data-wrapper">
        <h4>Continent:</h4>
        <span>${data[i].continents[0]}</span>
    </div>
    <div class="data-wrapper">
        <h4>Population:</h4>
        <span>${data[i].population}</span>
    </div>
    <div class="data-wrapper">
    <h4>Currency:</h4>
    <span>${data[i].currencies[Object.keys(data[i].currencies)].name}</span>
    </div>
    <div class="data-wrapper">
    <h4>Languages:</h4>
    <span>${Object.values(data[i].languages)
      .toString()
      .split(",")
      .join(", ")}</span>
    </div>
</div>

`;
        } else if (countryName.length === 0) {
          result.innerHTML = "<h3>The input field can not be empty</h3>";
        }
      }
    });
});

//.catch(() => {
//    if (countryName.length === 0) {
//        return(
//        result.innerHTML ='<h3>The input field can not be empty</h3>');
//
//    }
//    else{
//        result.innerHTML =`<h3>Please, enter a valid country name</h3>`;
//    }
//})
