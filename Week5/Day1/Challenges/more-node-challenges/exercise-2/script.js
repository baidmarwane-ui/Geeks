const readline = require('readline');
const getMinutesLived = require('./date');

const hardcodedBirthdate = '1998-05-15';
const minutes = getMinutesLived(hardcodedBirthdate);

console.log(`Birthdate: ${hardcodedBirthdate}`);
console.log(`You have lived approximately ${minutes.toLocaleString()} minutes in your life.`);

if (process.argv.includes('--prompt')) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('\n[Bonus] Enter your birthdate (YYYY-MM-DD): ', (input) => {
    try {
      const userMinutes = getMinutesLived(input.trim());
      console.log(`You have lived ${userMinutes.toLocaleString()} minutes!`);
    } catch (err) {
      console.error(err.message);
    }
    rl.close();
  });
}
