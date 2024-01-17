/*
    name : dayan modoux
    date : 17.01.24
    project : trc meteo
    version : 1
    description : trc
*/

let weather_history_template = document.querySelector("#weather-history-template")
let weather_page = document.querySelector("#weather-page")

let init = {
    method: "GET",
    headers: {
    'Content-Type': 'application/json',
    }
}

async function showWeather(){
    let reponse = await fetch("http://api.weatherapi.com/v1/current.json?key=64d7533e7ffc454d921142055241701&q=geneva")
    let jsonReponse = await reponse.json()

    let clone = weather_history_template.content.cloneNode(true);

    console.log(clone.querySelector("#condition"));

    clone.getElementById("condition").innerHTML = jsonReponse['current']['condition']['text']
    clone.getElementById("weather-image").src = "https:" + jsonReponse['current']['condition']['icon']
    clone.getElementById("country").innerHTML = `${jsonReponse['location']['country']} -> ${jsonReponse['location']['name']}`

    weather_page.querySelector("main").appendChild(clone);
}

showWeather()