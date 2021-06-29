const age = 16;
const isFemale = false;
const driverStatus = "bob";
const firstName = "Niks";
const totalAmount = 60;

console.log("========================================================================");
console.log("Age = " + age);
if(age >= 18) {
    console.log("U mag naar binnen.");
    } else {
        console.log("U mag niet naar binnen vanwege uw te jonge leeftijd.");
    }

console.log("");

console.log("isFemale = " + isFemale);
if (isFemale) {
    console.log("U mag naar binnen, u een vrouw.");
    }
    else {
        console.log("U mag niet naar binnen, u bent geen vrouw.");
    }

console.log("");

console.log("driverStatus = " + driverStatus);
if(driverStatus == "bob") {
    console.log("U bent Bob, u mag geen alcohol drinken, maar u mag wel rijden.");
    }
    else {
        console.log("U ben niet de Bob, dus u mag wel alcohol drinken, maar niet rijden.");
    }

console.log("");

console.log("Age = " + age);
if(age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
    } else {
        console.log("Helaas, je krijgt geen korting vandaag.");
    }

console.log("");

console.log("firstName = " + firstName);
if(firstName == "Bram" || firstName == "Sarah") {
    console.log("Gefeliciteerd, je krijgt een gratis glas koude cola!");
    } else {
        console.log("Helaas, je hebt de verkeerde naam voor een gratis drankje.");
    }

console.log("");

console.log("totalAmount = " + totalAmount);
 if (totalAmount >= 100) {
    console.log("Gefeliciteerd, u krijgt: een gratis fles champagne!");
    }
    else if (totalAmount >= 50) {
        console.log("Gefeliciteerd, u krijgt: een gratis portie nachos!");
        }
        else if (totalAmount >= 25) {
            console.log("Gefeliciteerd, u krijgt: een gratis portie (vega) bitterballen!");
            }
            else {
                console.log("Gefeliciteerd, u krijgt niks gratis!");
                }

console.log("========================================================================");
console.log("");



