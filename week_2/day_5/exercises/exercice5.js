const family = {
	father: "John",
	mother: "Jane",
	child: "Alex",
};

for (const key in family) {
	console.log(key);
}

for (const key in family) {
	console.log(family[key]);
}