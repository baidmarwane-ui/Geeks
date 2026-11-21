const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const str = epic.reduce((result, element) => result ? `${result} ${element}` : element, '');
console.log(str);