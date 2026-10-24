let r = "";
console.log('using one loop')
for (let i = 1; i <= 6; i++) {
	r += "* ";
	console.log(r.trimEnd());
}
console.log('using two nested for loops ')

for (let i = 1; i <= 6; i++) {
	let s = "";
	for (let j = 1; j <= i; j++) {
		s += "* ";
	}
	console.log(s.trimEnd());
}