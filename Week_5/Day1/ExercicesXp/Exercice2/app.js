import people from "./data.js";

function calculateAverageAge(persons) {
  if (!persons || persons.length === 0) {
    console.log("No persons found.");
    return 0;
  }
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / persons.length;
  console.log(`The average age is: ${averageAge.toFixed(2)}`);
  return averageAge;
}

// Calculate and print the average age
calculateAverageAge(people);
