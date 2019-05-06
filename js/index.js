/*------------------------------------------------------------Logo button */
const logo = document.querySelector("#logo");

logo.addEventListener("click", menu);
logo.style.cursor = "pointer";

function menu(){
    window.location.href = "index.html";
}
/*------------------------------------------------------------Menu */
//const template = document.querySelector("#tempMenu").content;
const baseLink = "http://keawp.needrent.dk/wp-json/wp/v2/";
const baseGenre = "huset_genre";
    // const catID = urlParms.get("event");

const catNav = document.querySelector("#catNav");

function loadCats() {
            fetch(baseLink + "huset_genre?per_page=15").then(e => e.json()).then(buildCatMenu);
        }
        function loadByCat(cat) {
            fetch(baseLink + "event?huset_genre=" + cat + "&_embed").then(e => e.json()).then(show);
        }
        function loadAll() {
            fetch(baseLink + "event?_embed").then(e => e.json()).then(show);
        }
        loadCats()


function buildCatMenu(data){
    data.forEach(cat=>{
        const newA = document.createElement("a");
        const newBreake = document.createElement("span");
        newBreake.innerHTML = " &sol; "
        newA.textContent=cat.name;
        newA.href="?event="+cat.id;

        catNav.appendChild(newA);
    })
}

/*------------------------------------------------------------Index */

const frontPage = "db_huset?_embed";
const template = document.querySelector("#tempContent").content;
const parent = document.querySelector("main");

function loadData(link){
    fetch(link).then(e=>e.json()).then(data=>show(data));
}

function show(data){
    data.forEach(event=>{
        console.log(event);
        // clone the template
        const clone = template.cloneNode(true);

        // populate the template
        const eventName = clone.querySelector("h3");
        const img = clone.querySelector(".imgContainer img");
        const eventShort = clone.querySelector("section article");
        const eventMore = clone.querySelector("a");

        eventName.innerHTML=event.title.rendered;
        img.src=event._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url;
        img.alt=event.title.rendered;
        eventShort.innerHTML=event.content.rendered;
        eventMore.href = "page.html?id=112";/*+ event.id*/

        let eventVenueData = event._embedded['wp:term']['1'];

        eventVenueData.forEach(function(element){
            console.log(element);
            let newEvent = document.createElement('li');
            let fillEvent = element.name;

            newEvent.textContent = fillEvent;
            const eventVenue = clone.querySelector(".venue");

            eventVenue.appendChild(newEvent);

        });
        /*
        let bandFormerData = object._embedded['wp:term']['1'];

        if(bandFormerData == 0){
            bandFormerLabel.classList.add("hide");
        }else{
                        bandFormerData.forEach(function(element){
            //console.log(element);
            let newMember = document.createElement('li');
            let fillMember = element.name;

            newMember.textContent = fillMember;
            const bandMembers = clone.querySelector(".bandFormer");

            bandMembers.appendChild(newMember);

        });
        }

        let bandGenreData = object._embedded['wp:term']['2'];

        bandGenreData.forEach(function(element){
            //console.log(element);
            let newMember = document.createElement('li');
            let fillMember = element.name;

            newMember.textContent = fillMember;
            const bandMembers = clone.querySelector(".bandGenre");

            bandMembers.appendChild(newMember);

        });

        let bandInstrumentData = object._embedded['wp:term']['3'];

        bandInstrumentData.forEach(function(element){
            //console.log(element);
            let newMember = document.createElement('li');
            let fillMember = element.name;

            newMember.textContent = fillMember;
            const bandMembers = clone.querySelector(".bandInstruments");

            bandMembers.appendChild(newMember);

        });

        let bandLabelData = object._embedded['wp:term']['4'];

        bandLabelData.forEach(function(element){
           // console.log(element);
            let newMember = document.createElement('li');
            let fillMember = element.name;

            newMember.textContent = fillMember;
            const bandMembers = clone.querySelector(".bandLabel");

            bandMembers.appendChild(newMember);

        });

        if(object.alias){
            bandAlias.innerHTML="<span>Alias: </span>" +object.alias;
        }
        else{
            bandAlias.classList.add("hide");
        }
        if(object.end_year == "0000-00-00"){
            bandEnd.classList.add("hide");
        }
        else{
            let bandEndData = new Date(object.end_year);
            let bandEndYear = bandEndData.getFullYear();
            bandEnd.textContent = "Broke up: " + bandEndYear;
        }
        if(object.website){
            website.href=object.website;
            website.textContent=object.website;
        }
        else{
            website.classList.add("hide");
        }

*/

        // append to the DOM
        parent.appendChild(clone);
    })
}

loadData(baseLink+frontPage);
