function checkSpam(str) {
  let lowerStr = str.toLowerCase(); // 1XbeT now => 1xbet now


  return lowerStr.includes('1xBet'.toLowerCase()) || lowerStr.includes('XXX'.toLowerCase()); // 1xBet => 1xbet
}


