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
        document.getElementById("Aero").textContent = "Aero: ";
        document.getElementById("PitSkill").textContent = "Pit Skill: ";
        document.getElementById("Engine").textContent += ` ${this.getEngine()}`;
        document.getElementById("Aero").textContent += ` ${this.getAero()}`;
        document.getElementById("PitSkill").textContent += ` ${this.getPitSkill()}`;
    }

}

class Race {
    constructor(raceName, raceDistance, trackType) {
        this.raceName = raceName;
        this.raceDistance = parseInt(raceDistanc);
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

class Sponsor {
    constructor(sponsorName, sponsorMoney) {
        this.sponsorName = sponsorName;
        this.sponsorMoney = parseInt(sponsorMoney);
    }

    getSponsor() {
        return this.sponsorName
    }

    getMoney() {
        return this.getMoney
    }
}

function sponsorAcceptance(high, low, offer, name) {
    var probability = parseInt(Math.random() * 101);
    var offerSuccess = Math.floor(1 + 10 * (1 - (offer - high) / (offer - low)));
    document.getElementById('offersuccess').innerText = `Probability of acceptance: ${offerSuccess}%`
    document.getElementById('probability').innerText = `Offer: ${probability}`
    if (probability < offerSuccess) {
        document.getElementById('message').innerText = "Sponsor accepted!"
        sponsorArray.push(new Sponsor(name, offer));
    } else {
        document.getElementById('message').innerText = "Sponsor denied. Try another amount."
    }
}


let Driver1 = new Car(60);

let button = document.getElementById('startButton');

button.addEventListener('click', function () {
    Driver1.displayRatings();
});

const sponsorArray = [];
sponsorArray.length = 2;

let sponsorButton = document.getElementById('offerSubmit');
sponsorButton.addEventListener('click', function () {
    var moneyOffered = parseInt(document.getElementById('offer').value);
    var sponsorName = document.getElementById('sponsorname').value;
    if (document.getElementById('sponsorLevel1').checked) {
        if (moneyOffered < 85000 || moneyOffered > 250000) {
            document.getElementById('message').innerText = "Incorrect sponsor amount. Try again."
        } else {
            sponsorAcceptance(250000, 85000, moneyOffered, sponsorName);
            console.log(sponsorArray)
        }
    } else if (document.getElementById('sponsorLevel2').checked) {
        if (moneyOffered < 20000 || moneyOffered > 75000) {
            document.getElementById('message').innerText = "Incorrect sponsor amount. Try again."
        } else {
            sponsorAcceptance(75000, 20000, moneyOffered, sponsorName);
            console.log(sponsorArray)
        }
    } else if (document.getElementById('sponsorLevel3').checked) {
        if (moneyOffered < 10000 || moneyOffered > 50000) {
            document.getElementById('message').innerText = "Incorrect sponsor amount. Try again."
        } else {
            sponsorAcceptance(50000, 10000, moneyOffered, sponsorName);
            console.log(sponsorArray)
        }
    }
});
