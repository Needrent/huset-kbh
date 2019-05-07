/*------------------------------------------------------------Logo button */
const logo = document.querySelector("#logo");

logo.addEventListener("click", menu);
logo.style.cursor = "pointer";

function menu(){
    window.location.href = "index.html";
}
/*------------------------------------------------------------load single content*/

const eventImg = document.querySelector(".imgContainer img");
const eventName = document.querySelector("#eventName");
const eventVenue = document.querySelector("#eventVenue");
const eventTime = document.querySelector("#eventTime");
const eventGenre = document.querySelector("#eventGenre");
const eventPrice = document.querySelector("#price");
const eventTickets = document.querySelector("#tickets");
const eventInfo = document.querySelector("article");


const baseLink = "http://keawp.needrent.dk/wp-json/wp/v2/db_huset?id=";
const paramsId = new URLSearchParams(window.location.search);
const eventID = paramsId.get("id");
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


function loadMenuData(link){
    fetch(link + eventID + "?_embed").then(e=>e.json()).then(data=>showMenu(data));
}
function showMenu(data){
    data.forEach(object=>{

        if(object.id == eventID){
            console.log(object)

            eventName.innerHTML = object.title.rendered;
            eventInfo.innerHTML = object.content.rendered;

            let eventStartData = new Date(object.event_start);
            let eventStartDay = eventStartData.getDate();
            let eventStartMonth = eventStartData.getMonth();
            let eventStartHour = eventStartData.getHours();
            let eventStartMinut = eventStartData.getMinutes();

            let eventEndData = new Date(object.event_end);
            let eventEndDay = eventEndData.getDate();
            let eventEndMonth = eventEndData.getMonth();
            let eventEndHour = eventEndData.getHours();
            let eventEndMinut = eventEndData.getMinutes();

            eventTime.textContent = + eventStartDay +". "+ months[eventStartMonth] +" "+ eventStartHour + ":" + eventStartMinut + " - " + eventEndDay +". "+ months[eventEndMonth] +" "+ eventEndHour + ":" + eventEndMinut;

            if(object.price != 0){
                eventPrice.textContent = "Price: " + object.price + " DDK";
            }
            else{
                eventPrice.textContent = "Price: Free";
            }
            eventPrice.href = object.tickets;
            eventTickets.href = object.tickets;

           /* let venueData = object._embedded['wp:term']['1'];

            venueData.forEach(function(element){
            //console.log(element);
            let newVenue = document.createElement('li');
            let fillVenue = element.name;

            newVenue.textContent = fillVenue;
            const venue = clone.querySelector(".venue");

            venue.appendChild(newVenue);

        });*/


        }
    });
}
loadMenuData(baseLink);
