/*------------------------------------------------------------Logo button */
const logo = document.querySelector("#logo");

logo.addEventListener("click", menu);
logo.style.cursor = "pointer";

function menu(){
    window.location.href = "index.html";
}
/*------------------------------------------------------------load single content*/
const baseLink = "http://keawp.needrent.dk/wp-json/wp/v2/huset_db";
const params = new URLSearchParams(window.location.search);
const eventID = params.get("id");
console.log(eventID);
        fetch(baseLink + "?id=" +eventID + "?_embed").then(e => e.json()).then(showEvent);


/*
const article = document.querySelector("article");
const make = document.querySelector(".make");
const model = document.querySelector(".model");
const price = document.querySelector(".price");
const km = document.querySelector(".km");
const color = document.querySelector(".color");
const excerpt = document.querySelector(".excerpt");
const img = document.querySelector("img");

function showEvent(data) {
    data._embedded["wp:term"][1].forEach(term => {
        console.log(term.name)
        const newP = document.createElement("p");
        newP.textContent = term.name;
        newP.classList.add("tag");
        article.appendChild(newP);
    });
    make.textContent = data.make;
    model.textContent = data.title.rendered;
    price.textContent = data.price;
    km.textContent = data.km;
    color.textContent = data.color;
    excerpt.innerHTML = data.excerpt.rendered;
    img.src = data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
}*/
