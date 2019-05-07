/*------------------------------------------------------------Logo button */
const logo = document.querySelector("#logo");

logo.addEventListener("click", menu);
logo.style.cursor = "pointer";

function menu(){
    window.location.href = "index.html";
}
/*------------------------------------------------------------load single content*/

const eventImg = document.querySelector(".imgContainer img");
const eventVenue = document.querySelector("h3");
const eventTime = document.querySelector("h4");
const eventPrice = document.querySelector("#price");
const eventTickets = document.querySelector("#tickets");
const eventInfo = document.querySelector("article");

const baseLink = "http://keawp.needrent.dk/wp-json/wp/v2/db_huset?id=";
const paramsId = new URLSearchParams(window.location.search);
const eventID = paramsId.get("id");

//console.log(eventID);

fetch(baseLink + eventID + "?_embed").then(e => e.json()).then(showEvent);

function showEvent(object){
    console.log(object);

    //document.title = object.huset_genre + " | Huset KBH";
}

