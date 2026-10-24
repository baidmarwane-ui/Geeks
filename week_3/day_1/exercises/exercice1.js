function displayNumbersDivisible(divisor = 23) {
	const numbers = [];
	let sum = 0;

	for (let number = 0; number <= 500; number++) {
		if (number % divisor === 0) {
			numbers.push(number);
			sum += number;
		}
	}

	console.log(...numbers);
	console.log(`Sum : ${sum}`);
}

displayNumbersDivisible();