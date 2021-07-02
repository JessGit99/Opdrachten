const colors = ["yellow", "blue", "red", "orange"];

// WHILE LOOP

console.log("===> WHILE LOOP");

let i = 0;
while(i < colors.length) {
    console.log("kleur: "+ colors[i]);
    i++;
}

// FOR LOOP

console.log("===> FOR LOOP");

for(let i = 0; i < colors.length; i++) {
    console.log("kleur: " + colors[i]);
}


// FOR EACH
console.log("===> FOR EACH");

colors.forEach(Element => console.log("kleur: " + Element));


// 1: For loop: 2 regels
//    While loop: 4 regels
// 2: forEach: 1 regel
// 3: forEach is leesbaarder omdat het maar één regel is, 
//    minder kans op fouten (zoals bijvoorbeeld met .length, en < of <= etc) en 
//    misschien kost dit ook minder rekenkracht?
//4:  Volgens mij zijn onderstaande methodes allemaal "itereer" voorbeelden want er wordt
//    herhaaldelijk door een lijst met waardes gegaan.


// Properties van een object loggen:
// Methode for...in loop

console.log("");
console.log("");
console.log("=====> Methode for...in loop")
const bike = {
    brand: "Gazelle",
    type: "XR4",
    model: "Male",
    color: "Grey",
    price: 1095,
    sold: true
};

for(const key in bike) {
    console.log(`${key}: ${bike[key]}`);
};


// Methode Object.keys()

console.log("");
console.log("");

console.log("=====> Methode Object.keys()")
const keys = Object.keys(bike);
keys.forEach((key, index) => {
    console.log(`${key}: ${bike[key]}`);
})

console.log("");
console.log("");


// Methode Object.values() die alleen de waardes logt

console.log("=====> Methode Object.values() die alleen de waardes log")
Object.values(bike).forEach(val => console.log(val));

