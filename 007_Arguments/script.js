// ===== NO ARGUMENTS =====

const paintWall0 = function(string) {
    console.log("==> Geen argumenten:")
    console.log("De muur zal deze kleur krijgen: rood");
}

paintWall0();

// ===== SINGLE ARGUMENT =====
const paintWall1 = function (string) {
    console.log("==> Één argument:")
    console.log("De muur zal deze kleur krijgen: " + string);
}

let paintColor = 'groen';
paintWall1(paintColor);


// ===== MULTIPLE ARGUMENTS =====
const paintWall9 = function (string1, string2) {
    console.log("==> Meerdere argumenten:")
    console.log("De "+ string1 + " muur zal deze kleur krijgen: " + string2);
}

let wall = 'noordelijke';
let newPaintColor = 'groen';
paintWall9(wall, newPaintColor);
