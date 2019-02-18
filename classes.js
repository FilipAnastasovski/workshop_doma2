let price = {
    fuel: 50,
    repair: 60,
    crew: 80
}

class Ship {
    constructor(name, crew, fuel, hull, speed, img) {
        this.name = name;
        this.crew = crew;
        this.fuel = fuel;
        this.maxFuel = fuel;
        this.hull = hull;
        this.maxHull = hull;
        this.speed = speed;
        this.img = img;
        this.credits = 500;
        this.isWorking = false;
        this.isDamaged = false;
        this.isDestroyed = false;
        this.dockedPlanet = null;
    }

    start(planet) {
        if (this.dockedPlanet === planet) {
            console.log("You are already on this planet.");
            return;
        }

        if (!(planet instanceof Planet)) {
            console.log("This is not a planet.");
            return;
        }

        if (planet.shipDocked.length > 0) {
            console.log("There is a ship docked at this planet.");
            return;
        }

        if (this.isDamaged === true && this.isDestroyed === true && this.crew === 0) {
            console.log("The ship is damaged,destroyed or has no crew.");
            return;
        }

        let calculateFuel = planet.distance * 20;

        if (this.fuel < calculateFuel) {
            console.log("You have no fuel to reach the planet.");
            return;
        } else {
            console.log(`${this.name} is ready to go.`);
        }
        
        if(this.dockedPlanet !== null){
            this.dockedPlanet.shipDocked.pop();
        }
        this.isWorking = true;
        this.fuel = this.fuel - calculateFuel;

        let calculateTime = (planet.distance * 1000) / this.speed;
        console.log(`${this.name} started it's journey to ${planet.name}.`);

        setTimeout(() => {
            console.log(`${this.name} arrived on ${planet.name}.`)
            console.log(`${this.name} started it's docking on ${planet.name}.`);
            this.dock(planet);
        }, calculateTime);
    }

    stats() {
        console.log(`${this.name} starts flying`);
        console.log(`CREW: ${this.crew}`);
        console.log(`FUEL: ${this.fuel}/${this.maxFuel}`);
        console.log(`HULL: ${this.hull}/${this.maxHull}`);
        console.log(`CREDITS: ${this.credits}`);
    }

    dock(planet) {
        setTimeout(() => {
            planet.shipDocked.push(this)
            this.isWorking = false;
            this.dockedPlanet = planet;
            console.log(`${this.name} docked on ${planet.name}.`);
            this.stats();
        }, 2000);
    }
}


class Planet {
    constructor(name, size, population, distance, development, img) {

        this.name = name;
        this.size = size;
        this.population = population;
        this.distance = distance;
        this.development = development;
        this.img = img;
        this.shipDocked = [];
    }

    getPlanetPrice(price) {
        price = this.development * price - Math.floor(this.population / this.size);
        return price;
    }

    repair(ship) {
        if (!(ship instanceof Ship)) {
            console.log("can't fix this one");
            return;
        }

        if (!this.shipDocked.includes(ship)) {
            console.log(`${ship.name} is not on this planet`);
            return;
        }

        let hullPrice = this.getPlanetPrice(price.repair);

        if (ship.credits < hullPrice) {
            console.log("You broke");
            return;
        } else if (ship.hull === ship.maxHull){
            console.log("not damaged , nothing to repair");
            return;
        } else {
            ship.hull = ship.maxHull;
            ship.credits = ship.credits - hullPrice;
            console.log(`damage was reparied for ${hullPrice} `);
            ship.stats();
        }
    }

    refuel(ship) {
        if (!(ship instanceof Ship)) {
            console.log("not a ship");
            return;
        }

        if (!this.shipDocked.includes(ship)) {
            console.log(`${ship.name} is not on this planet`);
            return;
        }
        
        if (ship.fuel === ship.maxFuel){
            console.log("no more room for fuel");
            return;
        }

        let fuelPrice = this.getPlanetPrice(price.fuel);

        if (ship.credits < fuelPrice) {
            console.log("You broke");
            return;
        } else {
            ship.fuel = ship.maxFuel;
            ship.credits = ship.credits - fuelPrice;
            console.log(`ship refuled for ${fuelPrice} `);
            ship.stats();
        }
    }

    hireCrewMember(ship) {
        if (!(ship instanceof Ship)) {
            console.log("not a ship");
            return;
        }

        if (!this.shipDocked.includes(ship)) {
            console.log(`${ship.name} is not on this planet`);
            return;
        }

        let crewPrice = this.getPlanetPrice(price.crew);
        if (ship.credits < crewPrice) {
            console.log("You broke");
            return;
        } else {
            ship.crew += 1;
            ship.credits = ship.credits - crewPrice;
            console.log(" new crew member joins the fun");
            ship.stats();
        }
    }
}