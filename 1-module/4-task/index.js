function checkSpam(str) {
  // ваш код...
  const lowerStr = str.toLowerCase();

  if (lowerStr.includes('1xBet'.toLowerCase())) {
    return true;
  }

  return lowerStr.includes('XXX'.toLowerCase());
}
