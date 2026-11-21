const getNextHoliday = require('./date');

const holidayInfo = getNextHoliday();

console.log(`Today's date: ${holidayInfo.today}`);
console.log(`Upcoming holiday: ${holidayInfo.holidayName} (${holidayInfo.holidayDate})`);
console.log(holidayInfo.message);
