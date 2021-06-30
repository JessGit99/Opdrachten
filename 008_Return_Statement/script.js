// ===== Checking if number is over 100 =====

const bigNumber = function(number) {
    if(number > 100) {
        return true;
    }
    else {
        return false;
    }
}

const number = 99;
console.log("");
console.log("==> Checking if number is over 100");
console.log("Number: " + number);
console.log(bigNumber(number));
console.log("");

// ===== Bouncer at a club =====

const bounce = function(maxNumber, currentNumber, age) {
    if(currentNumber == maxNumber) {
        return console.log(messageTooBusy);
    }

    else if(age < 18) {
        return console.log(messageAdultsOnly);
    }

    else if(currentNumber < maxNumber) {
        return console.log(messageComeIn);
    }

    else {
        return console.log(messageUnknown);
    }

}

const messageTooBusy = "It's too busy now, come back later.";
const messageAdultsOnly = "This is a club for adults.";
const messageComeIn = "Come in.";
const messageUnknown = "We have a problem!";

console.log("");
console.log("==> Bouncer at a club");
maxNumber = 60;
currentNumber = 40;
age = 18;
console.log("Maximum number: " + maxNumber);
console.log("Current number: " + currentNumber);
console.log("Age: " + age);
bounce(maxNumber, currentNumber, age);
console.log("");


// ===== Calculating the average =====

function averageFive(numberOne, numberTwo, numberThree, numberFour, numberFive) {
    let result = (numberOne + numberTwo + numberThree + numberFour + numberFive) / 5;
    return result;
}

console.log("");
console.log("==> Average of five");
// const numbers = [1, 2, 3, 4, 5];
// let resultAverage = averageFive(numbers);
// console.log("Numbers: " + numbers);
// console.log(resultAverage);

console.log(Math.round(averageFive(1, 2, 3, 4, 5)));
console.log(Math.round(averageFive(12, 5, 3, 33, 67)));
console.log(Math.round(averageFive(9, 4, 102, 45, 78)));
console.log(Math.round(averageFive(80, 1, 45, 7, 66)));






