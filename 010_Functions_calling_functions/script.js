// =====> Hey kiddo

const isAdult = function(age) {
    return age >= 18;
};

const greeting = function() {

    if(isAdult(age)) {
        return "Hello there.";
    }
    else {
        return "Hey kiddo.";
    }

};

console.log("");
console.log("=====> Hey Kiddo");
const age = 20;
console.log("Age: " + age);
console.log(greeting(age));
console.log("");


// =====> VAT calculations: 1

// const bedragBTW = function(prijsEx, percBTW) {
//     return prijsEx * (percBTW/100);
// };

// const totaalPrijs = function(prijsEx, percBTW) {
//     return bedragBTW(prijsEx, percBTW) + prijsEx;
// }; 

// const prijsEx = 300;
// const percBTW = 21;
// console.log("");
// console.log("=====> BTW oefening 1");
// console.log("");
// console.log("Prijs ex. BTW: €" + prijsEx);
// console.log("BTW percentage: " + percBTW + "%");
// // =====> UITVOER
// console.log("BTW bedrag: €" + bedragBTW(prijsEx, percBTW));
// console.log("Totaalprijs: €" + totaalPrijs(prijsEx, percBTW));
// // =====> UITVOER
// console.log("");


// =====> VAT calculations: 2


const calcPrijsEx = function (prijsInc, percBTW) {
    return prijsInc / ((100 + percBTW) / 100);
};


const prijsExEnBedragBTW = function(prijsInc, percBTW) {
    const prijsEx = calcPrijsEx(prijsInc, percBTW);
    const bedragBTW = prijsInc - prijsEx;
        
    return [prijsEx, bedragBTW];
};


var prijsInc = 121;
var percBTW = 21;

console.log(prijsExEnBedragBTW(prijsInc, percBTW));

prijsInc = 245;
percBTW = 21;

console.log(prijsExEnBedragBTW(prijsInc, percBTW));