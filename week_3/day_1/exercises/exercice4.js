function hotelCost(nights) {
    return nights * 140;
}

function planeRideCost(destination) {
    switch (destination.trim().toLowerCase()) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

function rentalCarCost(days) {
    const cost = days * 40;
    return days > 10 ? cost * 0.95 : cost;
}

function totalVacationCost() {
    let nights;
    do {
        const answer = prompt("How many nights would you like to stay?");
        nights = answer !== null && answer.trim() !== "" ? Number(answer) : NaN;
    } while (!Number.isFinite(nights));

    let destination;
    do {
        destination = prompt("What is your destination?");
    } while (typeof destination !== "string" || destination.trim() === "");

    let days;
    do {
        const answer = prompt("How many days would you like to rent a car?");
        days = answer !== null && answer.trim() !== "" ? Number(answer) : NaN;
    } while (!Number.isFinite(days));

    const hotel = hotelCost(nights);
    const flight = planeRideCost(destination);
    const car = rentalCarCost(days);

    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${flight}.`);
    return car + hotel + flight;
}

console.log(`The total vacation cost is $${totalVacationCost()}.`);