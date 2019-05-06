/*------------------------------------------------------------Logo button */
const logo = document.querySelector("#logo");

logo.addEventListener("click", menu);
logo.style.cursor = "pointer";

function menu(){
    window.location.href = "index.html";
}
/*------------------------------------------------------------load single content*/
  const template = document.querySelector("template").content;
        const parent = document.querySelector("main");
        const urlParms = new URLSearchParams(window.location.search);
        const catID = urlParms.get("cat");
        const catNav = document.querySelector("#catNav");
        const baseLink = "http://keawp.needrent.dk/wp-json/wp/v2/";
        function loadCats() {
            fetch(baseLink + "categories?per_page=15").then(e => e.json()).then(buildCatMenu);
        }
        function loadByCat(cat) {
            fetch(baseLink + "car?categories=" + cat + "&_embed").then(e => e.json()).then(show);
        }
        function loadAll() {
            fetch(baseLink + "car?_embed").then(e => e.json()).then(show);
        }
        loadCats()
        if (catID) {
            loadByCat(catID)
        } else {
            loadAll()
        }
        function buildCatMenu(cats) {
            cats.forEach(cat => {
                const newA = document.createElement("a");
                newA.textContent = cat.name;
                newA.href = "?cat=" + cat.id;
                catNav.appendChild(newA);
            })
        }
        function show(cars) {
            cars.forEach(car => {
                const clone = template.cloneNode(true);
                clone.querySelector(".make").textContent = car.make;
                clone.querySelector(".model").textContent = car.title.rendered;
                clone.querySelector("img").src = car._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
                clone.querySelector("a").href = "details.html?id=" + car.id;
                parent.appendChild(clone);
            })
        }
