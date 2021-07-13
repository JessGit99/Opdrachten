// Bonusopdracht: Sneltoetsen
window.onload = function () {
    const element = document.getElementById("colorname");

    window.onkeydown = function (k) {
        switch (k.keyCode) {
            case 49:
            case 97:
                document.body.style.backgroundColor = "white";
                element.innerHTML = "Wit";
                break;
            case 50:
            case 98:
                document.body.style.backgroundColor = "green";
                element.innerHTML = "Groen";
                break;
            case 51:
            case 99:
                document.body.style.backgroundColor = "yellow";
                element.innerHTML = "Geel";
                break;
            case 52:
            case 100:
                document.body.style.backgroundColor = "blue";
                element.innerHTML = "Blauw";
                break;
            case 53:
            case 101:
                document.body.style.backgroundColor = "red";
                element.innerHTML = "Rood";
                break;
            case 48:
            case 96:
                document.body.style.backgroundColor = "initial";
                element.innerHTML = "-";
                break;
        }
    }
}

// Basisopdracht: Status menu op 'false' zetten
let toggleMenuStatus = false;
let toggleMenuStatusBonus = false;

// Basisopdracht: functie die wordt geactiveerd bij het aanklikken van een kleur in het menu
let onClickFunctions = function (id) {
    toggleMenu();
    toggleColor(id);
}

// Basisopdracht: functie om de achtergrond kleur daadwerkelijk aan te passen, en als bonus, ook de kleurnaam in beeld
let toggleColor = function (id) {
    const element = document.getElementById("colorname");

    switch (id) {
        case "color-wit":
            document.body.style.backgroundColor = "white";
            element.innerHTML = "Wit";
            break;
        case "color-groen":
            document.body.style.backgroundColor = "green";
            element.innerHTML = "Groen";
            break;
        case "color-geel":
            document.body.style.backgroundColor = "yellow";
            element.innerHTML = "Geel";
            break;
        case "color-blauw":
            document.body.style.backgroundColor = "blue";
            element.innerHTML = "Blauw";
            break;
        case "color-rood":
            document.body.style.backgroundColor = "red";
            element.innerHTML = "Rood";
            break;
        case "color-reset":
            document.body.style.backgroundColor = "initial";
            element.innerHTML = "Reset";
            break;
    }
}

// Basisopdracht: functie om het menu te tonen/verbergen
let toggleMenu = function () {
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

// BONUSopdracht: functie om het menu te tonen/verbergen
let toggleMenuBonus = function () {
    let getDropdownmenuBonus = document.querySelector(".menu-select-color-bonus");

    if (!toggleMenuStatusBonus) {
        getDropdownmenuBonus.style.visibility = "visible";
        toggleMenuStatusBonus = true;
    }
    else {
        getDropdownmenuBonus.style.visibility = "hidden";
        toggleMenuStatusBonus = false;
    }
}

// BONUSopdracht: functie om de achtergrond kleur daadwerkelijk aan te passen, en als bonus, ook de kleurnaam in beeld
let toggleColorBonus = function (id) {

    const element = document.getElementById("colorname");

    switch (id) {
        case "radio-wit":
            document.body.style.backgroundColor = "white";
            element.innerHTML = "Wit";
            break;
        case "radio-groen":
            document.body.style.backgroundColor = "green";
            element.innerHTML = "Groen";
            break;
        case "radio-geel":
            document.body.style.backgroundColor = "yellow";
            element.innerHTML = "Geel";
            break;
        case "radio-blauw":
            document.body.style.backgroundColor = "blue";
            element.innerHTML = "Blauw";
            break;
        case "radio-rood":
            document.body.style.backgroundColor = "red";
            element.innerHTML = "Rood";
            break;
        case "radio-reset":
            document.body.style.backgroundColor = "initial";
            element.innerHTML = "Reset";
            break;
    }
}
