const { addDays, format } = require('date-fns');

function performDateOperations() {
  const now = new Date();
  console.log(`Current date and time: ${now.toISOString()}`);

  const futureDate = addDays(now, 5);
  const formattedDate = format(futureDate, 'yyyy-MM-dd HH:mm:ss');

  console.log(`Date after adding 5 days: ${formattedDate}`);
  return formattedDate;
}

module.exports = performDateOperations;
