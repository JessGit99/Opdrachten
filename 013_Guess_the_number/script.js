
const setRange = function () {
    min = prompt("Geef het kleinste getal van de range.");
    max = prompt("Geef het grootste getal van de range.");

};

const randomWinningNumber = function(min, max) {
    winningNumber = Math.trunc(Math.random() * (max - min) + min);
    console.log(winningNumber);
    return winningNumber;
};

const pickNumber = function () {
    numberPlay = prompt(`Voer een nummer in van ${min} tot ${max} om te beginnen met raden.`);
    checkNumber(numberPlay);
};

const checkNumber = function (numberPlay) {
    if (numberPlay == winningNumber) {
        alert(`Gefeliciteerd! ${winningNumber} was inderdaad het juiste getal.`);
        endMessage();
    }
    else if (count < 5) {
        alert(`Helaas fout, u heeft nog ${5 - count} pogingen over.`);
        count++;
        pickNumber();
    }
    else {
        alert("Helaas, u heeft 5 pogingen gedaan en het getal niet geraden.");
        endMessage();
    }

};

const endMessage = function () {
    alert(`Fijne dag en tot een volgende keer ${personName}.`);
};


let personName = prompt("Welkom! Wat is je naam?", "Je naam");
alert(`Hey ${personName}, wat leuk dat je mee wilt doen.`);


let count = 1;
setRange();
randomWinningNumber(min, max);
pickNumber();





