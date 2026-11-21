function getMinutesLived(birthdate) {
  const birthDateObj = new Date(birthdate);
  if (isNaN(birthDateObj.getTime())) {
    throw new Error('Invalid birthdate format. Use YYYY-MM-DD or similar.');
  }

  const now = new Date();
  const diffMs = now - birthDateObj;
  if (diffMs < 0) {
    return 0;
  }

  const minutesLived = Math.floor(diffMs / (1000 * 60));
  return minutesLived;
}

module.exports = getMinutesLived;
