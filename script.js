let starFighter = new Ship("Starfighter", 3, 380, 500, 0.5, "img/StarFighter.png");
let crushinator = new Ship("Crushinator", 5, 540, 400, 0.2, "img/Crushinator.png");
let scouter = new Ship("Scouter", 1, 300, 300, 0.9, "img/Scouter.png");

let rubicon9 = new Planet("Rubicon9", 300000, 2000000, 4, 2, "img/Rubicon9.png");
let r7 = new Planet("R7", 120000, 4000000, 7, 3, "img/R7.png");
let magmus = new Planet("Magmus", 500000, 10000000, 6, 1, "img/Magmus.png");
let dextriaey = new Planet("Dextriaey", 50000, 500000, 9, 3, "img/Dextriaey.png");
let b18 = new Planet("B18-1", 250000, 4000000, 12, 2, "img/B18-1.png")

//prikazi brodovi
showShips();

// selektiraj brod pa planeta
 
$("#Starfighter").click(function() { 
    let ship = starFighter;
    showPlanets(ship);
});
$("#Crushinator").click(function() {
    let ship = crushinator;
    showPlanets(ship);
});
$("#Scouter").click(function() {
    let ship = scouter;
    showPlanets(ship);
});