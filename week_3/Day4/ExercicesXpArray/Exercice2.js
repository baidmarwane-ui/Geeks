const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
	const choice = index + 1;
	const suffix = ordinal[choice] ? ordinal[choice] : ordinal[0];
	console.log(`${choice}${suffix} choice is ${color}.`);
});
