const logo = document.querySelector("#logo");

logo.addEventListener("click", menu);
logo.style.cursor = "pointer";

function menu(){
    window.location.href = "index.html";
}

console.log("Hello World");
