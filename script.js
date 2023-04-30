var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.classList.add("row","m-3");

container.append(row);
var res =fetch("https://restcountries.com/v3.1/all");
res.then((data)=>data.json()).then((data1)=>foo(data1));

// function foo(data1){
//     for(var i=0;i<data1.length;i++){
//         row.innerHTML+=`
//         <div class="col-md-4">
//         <div class="card border-primary mb-4" style="width: 18rem;">
//         <img  src="${data1[i].flags.svg}" class="card-img-top" alt=">
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//       </div>`
//       document.body.append(container);
//     }
// }


function foo(data1){
  for(var i=0;i<data1.length;i++){
      row.innerHTML+=`
      <div class="col-md-4">
      <div class="card border-primary mb-4" style="width: 18rem;">
      <img  src="${data1[i].flags.svg}" class="card-img-top" alt="">
      <div class="card-body ">
        <h5 class="card-title">${data1[i].name.common}</h5>
        <p class="card-text">
          Capital: ${data1[i].capital ? data1[i].capital[0] : 'N/A'}<br>
          Region: ${data1[i].region ? data1[i].region : 'N/A'}<br>
          Country Code: ${data1[i].cca3}<br>
        </p>
        <button class="btn btn-success" data-country="${data1[i].cca3}" onclick="getWeather(this)">Click Weather</button>
      </div>
    </div>
    </div>`
    document.body.append(container);
  }
}

function getWeather(button) {
  var countryCode = button.getAttribute("data-country");
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${countryCode}&appid=<your_api_key_here>&units=metric`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      var temperature = data.main.temp;
      var description = data.weather[0].description;
      var message = `Current temperature in ${data.name}: ${temperature}°C (${description})`;
      alert(message);
    })
    .catch(error => console.error(error));
}
