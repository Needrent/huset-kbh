/*------------------------------------------------------------Logo button */
const logo = document.querySelector("#logo");

logo.addEventListener("click", menu);
logo.style.cursor = "pointer";

function menu(){
    window.location.href = "index.html";
}
/*------------------------------------------------------------Menu */
 const template = document.querySelector("tempContent").content;
        const parent = document.querySelector("main");
        const urlParms = new URLSearchParams(window.location.search);
        const catID = urlParms.get("cat");
        const catNav = document.querySelector("#catNav");

/*
        function loadCats() {
            fetch("http://keawp.needrent.dk/wp-json/wp/v2/huset_genre?per_page=15").then(e => e.json()).then(buildCatMenu);
        }
        function loadByCat(cat) {
            fetch(baseLink + "?embed" + "?huset_genre?event?huset_genre=" + cat + "&_embed").then(e => e.json()).then(show);
        }
        function loadAll() {
            fetch(baseLink + "?_embed").then(e => e.json()).then(show);
        }
        loadCats()
        if (catID) {
            loadByCat(catID)
        } else {
            loadAll()
        }
        function buildCatMenu(cats) {
            console.log(cats);
            cats.forEach(cat => {
                const newA = document.createElement("a");
                newA.textContent = cat.name;
                newA.href = "?cat=" + cat.id;
                catNav.appendChild(newA);
            })
        }
        function show(events) {
            events.forEach(event => {
               console.log(event.huset_genre[0]);
                const clone = template.cloneNode(true);
                clone.querySelector("h3").innerHTML = event.title.rendered;
                //clone.querySelector(".model").textContent = event.title.rendered;
                clone.querySelector("img").src = event._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
                clone.querySelector("a").href = "details.html?id=" + event.id;
                parent.appendChild(clone);
            })
        }/*


/*------------------------------------------------------------Index*/
//const frontPage = "db_huset?_embed";
const baseLink = "http://keawp.needrent.dk/wp-json/wp/v2/db_huset?_embed";

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
        eventMore.href = "page.html?id=112";

        let eventVenueData = event._embedded['wp:term']['1'];

        eventVenueData.forEach(function(element){
            console.log(element);
            let newEvent = document.createElement('li');
            let fillEvent = element.name;

            newEvent.textContent = fillEvent;
            const eventVenue = clone.querySelector(".venue");

            eventVenue.appendChild(newEvent);

        });

        // append to the DOM
        parent.appendChild(clone);
    })
    LoadData(baseLink);
}
