function getNextHoliday() {
  const now = new Date();
  const currentYear = now.getFullYear();

  const holidays = [
    { name: 'Christmas Day', date: new Date(currentYear, 11, 25, 0, 0, 0) },
    { name: "New Year's Day", date: new Date(currentYear + 1, 0, 1, 0, 0, 0) },
    { name: 'Valentine\'s Day', date: new Date(currentYear + 1, 1, 14, 0, 0, 0) },
    { name: 'Easter', date: new Date(currentYear + 1, 3, 20, 0, 0, 0) }
  ];

  const upcoming = holidays.find(h => h.date > now) || holidays[0];
  const diffMs = upcoming.date - now;

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  const pad = (n) => String(n).padStart(2, '0');

  return {
    today: now.toDateString(),
    holidayName: upcoming.name,
    holidayDate: upcoming.date.toDateString(),
    message: `the next holiday (${upcoming.name}) is in ${days} days and ${pad(hours)}:${pad(minutes)}:${pad(seconds)} hours`
  };
}

module.exports = getNextHoliday;
