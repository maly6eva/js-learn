function ucFirst(str) {
  // ваш код...
  if (str.length) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return str;
}
