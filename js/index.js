const preload = document.getElementById("preloader");

window.addEventListener('load', function () {
    setTimeout(preloadEnd,500);

    function preloadEnd(){
        preload.classList.add("preloadOut");
        window.addEventListener("animationend", hide);

        function hide(){
            preload.style.display = "none";
            }
        }
})
/*------------------------------------------------------------Logo button */
const logo = document.querySelector("#logo");

logo.addEventListener("click", menu);
logo.style.cursor = "pointer";

function menu(){
    window.location.href = "index.html";
}
/*------------------------------------------------------------Content */
let myLink = "http://keawp.needrent.dk/wp-json/wp/v2/db_huset_film?_embed";
let myCatLink = "http://keawp.needrent.dk/wp-json/wp/v2/huset_film";
const template = document.querySelector("#tempContent").content;
const parent = document.querySelector("main");
const menuBtn = document.querySelector("#catNav");

function loadData(link){
    fetch(link).then(e=>e.json()).then(data=>show(data));
}
function loadMenuData(link){
    fetch(link).then(e=>e.json()).then(data=>showMenu(data));
}
function showMenu(data){
    data.forEach(object=>{


        if(object.count != 0){
            //console.log(object)

            let newBtn = document.createElement("a");// create element
            let fillBtn = object.name;

            newBtn.textContent = fillBtn;// fill the created element
            newBtn.href = "?event=" + object.id;

            //console.log(newBtn);
            menuBtn.appendChild(newBtn);
        }
    });
}
loadMenuData(myCatLink);

const urlP = new URLSearchParams(window.location.search);
        console.log(urlP.get("event"));


function show(data){
    data.forEach(object=>{
        if (object.huset_film[0] == urlP.get("event") || urlP.get("event") == null){
        console.log(object);
        // clone the template
        const clone = template.cloneNode(true);

        // populate the template
        //const h2 = clone.querySelector("h2");
        clone.querySelector("h3").innerHTML = object.title.rendered;
        clone.querySelector("img").src = object._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url;
        clone.querySelector("img").title = object.title.rendered;
        clone.querySelector("section article").innerHTML = object.content.rendered;
        clone.querySelector("a").href = "page.html?id=" + object.id;


        let venueData = object._embedded['wp:term']['1'];

        venueData.forEach(function(element){
            //console.log(element);
            let newVenue = document.createElement('li');
            let fillVenue = element.name;

            newVenue.textContent = fillVenue;
            const venue = clone.querySelector(".venue");

            venue.appendChild(newVenue);

        });

        // append to the DOM
        parent.appendChild(clone);
        }
    });

}
loadData(myLink);

