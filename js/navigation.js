/*
    name :  
    date : 
    project : 
    version : 1
    description : 
*/

document.querySelector("#weather-link").addEventListener("click",changePage)

function changePage(event) {
    event.preventDefault()

    let splitUrl = event.srcElement.href.split("/")

    let pageSection = document.querySelector(`#${splitUrl[splitUrl.length-1]}-page`)

    if (pageSection != null || pageSection != undefined) {
         
    }
}