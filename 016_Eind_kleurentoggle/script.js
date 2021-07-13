// Basisopdracht: Status menu op 'false' zetten
let toggleMenuStatus = false;
const elementBody = document.querySelector("body");
const elementTextColorname = document.getElementById("colorname");


// Basisopdracht: functie om het menu te tonen/verbergen
const toggleMenu = function () {
    const getDropdownmenu = document.querySelector(".menu-select-color");

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
    elementBody.style.backgroundColor = "White";
    elementTextColorname.innerHTML = "Wit";
}

const changeToGroen = function () {
    elementBody.style.backgroundColor = "Green";
    elementTextColorname.innerHTML = "Groen";
}

const changeToGeel = function () {
    elementBody.style.backgroundColor = "Yellow";
    elementTextColorname.innerHTML = "Geel";
}

const changeToBlauw = function () {
    elementBody.style.backgroundColor = "Blue";
    elementTextColorname.innerHTML = "Blauw";
}

const changeToRood = function () {
    elementBody.style.backgroundColor = "Red";
    elementTextColorname.innerHTML = "Rood";
}

const changeToReset = function () {
    elementBody.style.backgroundColor = "Initial";
    elementTextColorname.innerHTML = "Reset";
}

document.getElementById("menu").addEventListener("click", toggleMenu);
document.getElementById("choice-wit").addEventListener("click", changeToWit);
document.getElementById("choice-groen").addEventListener("click", changeToGroen);
document.getElementById("choice-geel").addEventListener("click", changeToGeel);
document.getElementById("choice-blauw").addEventListener("click", changeToBlauw);
document.getElementById("choice-rood").addEventListener("click", changeToRood);
document.getElementById("choice-reset").addEventListener("click", changeToReset);


// Bonusopdracht: de functies om de kleur van de achtergrond te veranderen mbv toetsaanslagen
document.addEventListener("keydown", function(keyPressed) {
    if(keyPressed.key === "1") {
        changeToWit();
    }
    else if(keyPressed.key === "2") {
        changeToGroen();
    }
    else if (keyPressed.key === "3") {
        changeToGeel();
    }
    else if (keyPressed.key === "4") {
        changeToBlauw();
    }
    else if (keyPressed.key === "5") {
       changeToRood();
    }
    else {
        changeToReset();
    }
});