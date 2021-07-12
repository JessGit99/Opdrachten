// Basisopdracht: Status menu op 'false' zetten
let toggleMenuStatus = false;


// Basisopdracht: functie om het menu te tonen/verbergen
const toggleMenu = function () {
    let getDropdownmenu = document.querySelector(".menu-select-color");

    if (!toggleMenuStatus) {
        getDropdownmenu.style.visibility = "visible";
        toggleMenuStatus = true;
    }
    else {
        getDropdownmenu.style.visibility = "hidden";
        toggleMenuStatus = false;
    }
}

// Basisopdracht: de functies om de kleur van de achtergrond te veranderen en het menu weer te verbergen
const changeToWit = function() {
    document.querySelector("body").style.backgroundColor = "White";
    toggleMenu();
}

const changeToGroen = function () {
    document.querySelector("body").style.backgroundColor = "Green";
    toggleMenu();
}

const changeToGeel = function () {
    document.querySelector("body").style.backgroundColor = "Yellow";
    toggleMenu();
}

const changeToBlauw = function () {
    document.querySelector("body").style.backgroundColor = "Blue";
    toggleMenu();
}

const changeToRood = function () {
    document.querySelector("body").style.backgroundColor = "Red";
    toggleMenu();
}

const changeToReset = function () {
    document.querySelector("body").style.backgroundColor = "initial";
    toggleMenu();
}


document.getElementById("choice-wit").addEventListener("click", changeToWit);
document.getElementById("choice-groen").addEventListener("click", changeToGroen);
document.getElementById("choice-geel").addEventListener("click", changeToGeel);
document.getElementById("choice-blauw").addEventListener("click", changeToBlauw);
document.getElementById("choice-rood").addEventListener("click", changeToRood);
document.getElementById("choice-reset").addEventListener("click", changeToReset);

