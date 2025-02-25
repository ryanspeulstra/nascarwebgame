class Car {
    constructor(ratings) {
        this.engine = parseInt(ratings + Math.random() * 10);
        this.aero = parseInt(ratings + Math.random() * 10);
        this.pitSkill = parseInt(ratings + Math.random() * 10);
    }

    getEngine() {
        return this.engine
    }
    
    getAero() {
        return this.aero
    }

    getPitSkill() {
        return this.pitSkill
    }

    displayRatings() {
        document.getElementById("Engine").textContent = "Engine: ";
        document.getElementById("Aero").textContent =  "Aero: ";
        document.getElementById("PitSkill").textContent = "Pit Skill: ";
        document.getElementById("Engine").textContent += ` ${this.getEngine()}`;
        document.getElementById("Aero").textContent += ` ${this.getAero()}`;
        document.getElementById("PitSkill").textContent += ` ${this.getPitSkill()}`;
    }
    
}

class Race {
    constructor(raceName, raceDistance, trackType) {
        this.raceName = raceName;
        this.raceDistance = raceDistance;
        this.trackType = trackType;
    }

    getRaceDetails() {
        document.getElementById("RaceName").textContent += ` ${this.raceName}`;
        document.getElementById("RaceLength").textContent += ` ${this.raceDistance}`;
    
        let raceTypeText = "";
        switch (this.trackType) {
            case 1:
                raceTypeText = "Superspeedway";
                break;
            case 2:
                raceTypeText = "Intermediate";
                break;
            case 3:
                raceTypeText = "Short Track";
                break;
            case 4:
                raceTypeText = "Road Course";
                break;
            default:
                raceTypeText = "Unknown Race Type";
        }
    
        document.getElementById("RaceType").textContent += ` ${raceTypeText}`;
    }
    
}

let Driver1 = new Car(60);

let button = document.getElementById('startButton');

button.addEventListener('click', function() {
    Driver1.displayRatings();
});
