// let navbar =document.querySelector("navbar");
const navres = document.querySelector("#navres");


function myFunction() {


    if (navres.className === "navbar") {
        navres.className += " responsive";
    }

    else {
        navres.className = "navbar"
    }
}


