function getMinMax(str) {
  const data = str.split(' ').map(item => +item).filter(item => !Number.isNaN(item));

  return { min: Math.min(...data), max: Math.max(...data) };
}
