function createShip(ship) {

    let ships = $("#shipsList");
    ships.append(`
    <div class="col">
        <div class="card" style="width: 18rem;">
            <img src="${ship.img}" class="card-img-top" alt="${ship.name}">
            <div class="card-header">
                <h2>${ship.name}</h2>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Crew: ${ship.crew}</li>
                <li class="list-group-item">Fuel: ${ship.fuel}</li>
                <li class="list-group-item">Hull: ${ship.hull}</li>
                <li class="list-group-item">Speed: ${ship.speed}</li>
            </ul>
            <div class="card-body">
                <button id="${ship.name}" type="button" class="btn btn-primary">Select Ship</button>
            </div>
        </div>
    </div>`)
}

function createPlanet(planet,ship){
    let planets = $("#planetsList");
    planets.append(`
    <div class="col">
        <div class="card" style="width: 18rem;">
            <img src="${planet.img}" class="card-img-top" alt="${planet.name}">
            <div class="card-header">
                <h2>${planet.name}</h2>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Size: ${planet.size}</li>
                <li class="list-group-item">Population: ${planet.population}</li>
                <li class="list-group-item">Distance: ${planet.distance}</li>
                <li class="list-group-item">Development: ${planet.development}</li>
            </ul>
            <div class="card-body">
                <button id="goTo${planet.name}" type="button" class="btn btn-primary">Go To</button>
                <button id="repair${planet.name}" type="button" class="btn btn-primary">Repair</button>
                <button id="refuel${planet.name}" type="button" class="btn btn-primary">Refuel</button>
                <button id="hireCrew${planet.name}" type="button" class="btn btn-primary">Hire Crew Member</button>
            </div>
        </div>
    </div>`)
    $(`#goTo${planet.name}`).click(function(){
        ship.start(planet);
    })
    $(`#repair${planet.name}`).click(function(){
        planet.repair(ship);
    })
    $(`#refuel${planet.name}`).click(function(){
        planet.refuel(ship);
    })
    $(`#hireCrew${planet.name}`).click(function(){
        planet.hireCrewMember(ship);
    })
}

function showShips() {
    createShip(starFighter);
    createShip(crushinator);
    createShip(scouter);
}

function showPlanets(ship) {
    $("#ships").remove();
    createPlanet(rubicon9,ship);
    createPlanet(r7,ship);
    createPlanet(magmus,ship);
    createPlanet(dextriaey,ship);
    createPlanet(b18,ship);
}