const details = {
	my: 'name',
	is: 'Rudolf',
	the: 'reindeer'
};

const entries = Object.entries(details);
console.log(entries)
let s = '';

for (let i = 0; i < entries.length; i++) {
    console.log(entries[i][0])
	s += `${entries[i][0]} ${entries[i][1]} `;
}

console.log(s.trim());