function timeUntilJanuaryFirst() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const nextJanFirst = new Date(currentYear + 1, 0, 1, 0, 0, 0);

  const diffMs = nextJanFirst - now;
  if (diffMs <= 0) {
    return 'Happy New Year! Today is January 1st.';
  }

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  const pad = (n) => String(n).padStart(2, '0');

  return `the 1st January is in ${days} days and ${pad(hours)}:${pad(minutes)}:${pad(seconds)} hours`;
}

module.exports = timeUntilJanuaryFirst;
