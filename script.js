//Restapi urls
let restcountries = "https://restcountries.com/v3.1/all";

// creating html elements

let inputContainer = document.createElement("div");                           //creating the input section
let search = document.createElement("button");
let input = document.createElement("input");

   

 
inputContainer.setAttribute("class","container input-group my-5 px-0 ");                // setting the attribute 

search.setAttribute("class","btn btn-outline-primary  py-2 px-sm-4 fs-md-5 fs-6  ");
search.setAttribute("type","button");
search.innerHTML = "Enter a country name"

input.setAttribute("class","form-control ");
input.setAttribute("id","entries");
input.setAttribute("type","text");
input.setAttribute("placeholder","Enter a country name");



inputContainer.append(search,input);

let inputsection = document.getElementById("inputsection");                    // appending the input section 
inputsection.appendChild(inputContainer);

search.addEventListener("click",userEntry)



for(let c=1;c<=3;c++){

    let columncontainer = document.createElement("div");                           // creating the three weather card section using for loop
    let cards = document.createElement("div");                   
    let cardHeader = document.createElement("div");
    let flagContainer = document.createElement("div");
    let countryFlag = document.createElement("img");
    let cardBody = document.createElement("div");
    let cityDescription = document.createElement("div");
    
    for(let i=0;i<=2;i++){
        let spanDescription = document.createElement("span");
        cityDescription.appendChild(spanDescription);
    }
    
    let weatherButton = document.createElement("button");
    var infoWeather = document.createElement("div");


 
    
    
    
    columncontainer.setAttribute("class","col-lg-4 col-sm-12 col-md ");                                 //setting the attributes
    cards.setAttribute( "class","card  d-flex fs-5 fw-bold shadow-lg  bg-transparent h-100 ");
    cards.setAttribute( "id",`country${c}`)
    cardHeader.setAttribute("class","card-header bg-black text-success text-center mb-2 w-100");
    cardHeader.setAttribute("id",`name${c}`);
    flagContainer.setAttribute( "class","mx-3 shadow-lg ")
    countryFlag.setAttribute("class","card-img-top ")
    countryFlag.setAttribute("id",`img${c}`);
    countryFlag.setAttribute("alt","Card image");
    cardBody.setAttribute("class","card-body d-flex flex-column mx-auto");
    cityDescription.setAttribute("class","d-flex flex-column text-center mb-3 gap-1 fw-bolder ");
    cityDescription.setAttribute("id",`city${c}`);
    weatherButton.setAttribute("class","btn btn-primary");
     
    infoWeather.setAttribute("class","text-center bg-secondary bg-opacity-75 text-white shadow-lg")
    infoWeather.setAttribute("id",`weather${c}`)
    
    weatherButton.innerHTML = "click here for weather"
    cardHeader.innerHTML = "country"
    

    cardBody.append(cityDescription,weatherButton)
    flagContainer.append(countryFlag);
    cards.append(cardHeader,flagContainer,cardBody,infoWeather);
    columncontainer.appendChild(cards);
    

    weatherButton.addEventListener("click",function(){        //adding event listener to get the weather details


                                                        let countryName =document.getElementById(`name${c}`).innerText
                                                        infoWeather = document.getElementById(`weather${c}`)

                                                        console.log(countryName)

                                                        let weather = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=b6479c9249d4d6aacd122a874e4bd785`
                                                        
                                                        countryWeather('GET',weather,infoWeather);


                                                     })

    let cardSection = document.getElementById("cardsection");
    cardSection.appendChild(columncontainer);


   

}







//scripting for calcution 




let image1 = document.getElementById ("img1");               // getting  elements to enter country name,flag,capital
let image2 = document.getElementById ("img2");
let image3 = document.getElementById ("img3");

let name1 = document.getElementById ("name1");              
let name2 = document.getElementById ("name2");
let name3 = document.getElementById ("name3");

let city1 = document.getElementById ("city1");                 
let city2 = document.getElementById ("city2");
let city3 = document.getElementById ("city3");

let i = Math.ceil(Math.random()*100+10).toFixed(0);         //choosing a random number to display country cards 
let j = Math.ceil(Math.random()*100+10).toFixed(0);
let k = Math.ceil(Math.random()*100+10).toFixed(0);
//  console.log(i,j,k);


let countries;             // defining the global varible for country data

function gettingCountryName(method,url){                    //function to get a random three countries from the rest country 



                                    var data = new XMLHttpRequest ()       ////XMLhttp request  to the restcountries api
                                    data.open(method,url)
                                    data.send()
                                    data.onload = function (){
                                                     countries = JSON.parse(data.response)

                                                        image1.src = countries[i].flags.svg            // getting the country flag 
                                                        image2.src = countries[j].flags.svg
                                                        image3.src = countries[k].flags.svg

                                                        name1.innerText = countries[i].name.common     // getting the country name
                                                        name2.innerText = countries[j].name.common
                                                        name3.innerText = countries[k].name.common



                                                        // assigning the country description

                                                        city1.firstElementChild.innerText = `Capital: ${countries[i].capital[0]}`;                 // getting the country capital   
                                                        city1.firstElementChild.nextElementSibling.innerText =`Region: ${countries[i].region}`;     // getting the country region
                                                        city1.lastElementChild.innerText = `Country code: ${countries[i].cca3}`;                    // getting the country code

                                                        city2.firstElementChild.innerText = `Capital: ${countries[j].capital[0]}`;                 
                                                        city2.firstElementChild.nextElementSibling.innerText =`Region: ${countries[j].region}`;
                                                        city2.lastElementChild.innerText = `Country code: ${countries[j].cca3}`;

                                                        city3.firstElementChild.innerText = `Capital: ${countries[k].capital[0]}`;
                                                        city3.firstElementChild.nextElementSibling.innerText =`Region: ${countries[k].region}`;
                                                        city3.lastElementChild.innerText = `Country code: ${countries[k].cca3}`;
                                                        }  


                                    }




function countryWeather(method,url,weather){          //function to get today weather details

                                        var data = new XMLHttpRequest ()    //XMLhttp request  to the weather api
                                        data.open(method,url)
                                        data.send()
                                        data.onload = function (){

                                                                let countries = JSON.parse(data.response ) ;
                                                                weather.innerText = `Temp: ${countries.main.temp}
                                                                Humidity: ${countries.main.humidity}
                                                                Wind: ${countries.wind.speed}`;

                                                                //console.log(countries)  

                                                                }  
                                            }






function userEntry(){                                // function to get user input for the country name


                let entered = document.getElementById('entries').value
                let weather = document.getElementById('weather1')

                            

for(let q=0;q<=1;q++){                                               //loop to match the user input country name


    if(q==0){


                for(let l=0;l<=249;l++){                             //loop to update the 1st card value for the matched user input country name
            
                        if(entered==countries[l].name.common){

                        image1.src = countries[l].flags.svg
                        name1.innerText = countries[l].name.common

                        city1.firstElementChild.innerText = `Capital: ${countries[l].capital[0]}`;
                        city1.firstElementChild.nextElementSibling.innerText =`Region: ${countries[l].region}`;
                        city1.lastElementChild.innerText = `Country code: ${countries[l].cca3}`;


                        weather.innerText =  "";



                        //    console.log(countries[l].name.common);
                return
            }}}


                     else(alert(`please enter valid country            
name in camel case`))                                                           //to alert the user to enter the valid data


}}






window.addEventListener("keydown", enteredKey);             // adding a keybord listener for user input     



function enteredKey(e){                                 // function to get user input by key board



                                let entered = document.getElementById('entries').value;



    if(e.key==="Enter"){                                    // giving access to the user data

                                let weather = document.getElementById('weather1')


                            
            for(let q=0;q<=1;q++){                                                           //loop to update the 1st card value for the matched user input country name

                     if(q==0){

                              for(let l=0;l<=249;l++){

                                     if(entered==countries[l].name.common){

                                            image1.src = countries[l].flags.svg
                                            name1.innerText = countries[l].name.common

                                            city1.firstElementChild.innerText = `Capital: ${countries[l].capital[0]}`;
                                            city1.firstElementChild.nextElementSibling.innerText =`Region: ${countries[l].region}`;
                                            city1.lastElementChild.innerText = `Country code: ${countries[l].cca3}`;

                                            weather.innerText =  "" ;


                                            //    console.log(countries[l].name.common);

                                        return
                                    }} }

                                        else(alert(`please enter valid country 
Name in camel case`))                                                                                      //to alert the user to enter the valid data


                                    }}
                                
                                
                    }




window.onload = gettingCountryName('GET',restcountries);
