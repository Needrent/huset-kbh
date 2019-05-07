/*------------------------------------------------------------Logo button */
const logo = document.querySelector("#logo");

logo.addEventListener("click", menu);
logo.style.cursor = "pointer";

function menu(){
    window.location.href = "index.html";
}
/*------------------------------------------------------------load single content*/

const parent = document.querySelector("main");

const baseLink = "http://keawp.needrent.dk/wp-json/wp/v2/db_huset?id=";
const params = new URLSearchParams(window.location.search);
const eventID = params.get("id");

const myLink = baseLink + eventID + "?_embed";
console.log(myLink);

fetch(myLink).then(e => e.json()).then(showCar);

function showCar(data) {
            data.myLink.forEach(term=>{
                console.log(term.name)
                const newP = document.createElement("p");
                newP.textContent=term.name;
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
        }
