// =====> Function Declaration
function squareOne(numberOneA, numberOneB) {
    let resultOneA =  ((numberOneA * numberOneA) + (numberOneB * numberOneB));
    let resultOneB = resultOneA * resultOneA;
    return resultOneB;
}

console.log("");
console.log("=====> Function Declaration");
console.log(squareOne(2, 6));




// =====> Function Expression
const squareTwo = function(numberTwoA, numberTwoB) {
    let resultTwoA = ((numberTwoA * numberTwoA) + (numberTwoB * numberTwoB));
    let resultTwoB = resultTwoA * resultTwoA;
    return resultTwoB;
};

console.log("");
console.log("=====> Function Expression");
console.log(squareTwo(2, 6));


// =====> Arrow Function
const squareThree = (numberThreeA, numberThreeB) => {
    let resultThreeA = ((numberThreeA * numberThreeA) + (numberThreeB * numberThreeB));
    let resultThreeB = resultThreeA * resultThreeA;
    return resultThreeB;
}

console.log("");
console.log("=====> Arrow Function");
console.log(squareThree(2, 6));
console.log("");