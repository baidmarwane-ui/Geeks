function changeEnough(itemPrice, amountOfChange) {
    const coinValuesInCents = [25, 10, 5, 1];
    const totalChangeInCents = amountOfChange.reduce(
        (total, count, index) => total + count * coinValuesInCents[index],
        0
    );

    return totalChangeInCents >= Math.round(itemPrice * 100);
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));