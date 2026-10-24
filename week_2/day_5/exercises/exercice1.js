const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);
people[2] = "Jason";
console.log(people);
//let i= people.indexOf("James");
//people[i]="Jason"
//console.log(i);
people.push("Nadia");
console.log(people);
let id=people.indexOf("Mary")
console.log(`Index of Mary is : ${id}`)
const people1=people.slice(id+1,people.length-1);
console.log(people);
console.log(people1);
let indexFoo=people.indexOf('Foo');
console.log(`Index of Foo is : ${indexFoo}`)
//return -1 car  Foo n'existe pas dans array 
const last=people.slice(-1);
console.log(`value of last element : ${last}`);

//index de dernier element est toujours egal  length-1

people.forEach(item => console.log(item));

for (const item of people) {
    if(item==="Devon"){
        console.log(`element ${item}`);
        break;
    }
        console.log(`Pas element ${item}`);

}

