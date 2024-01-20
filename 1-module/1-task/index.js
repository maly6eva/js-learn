function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  let i = n;
  while (i > 1) {
    n *= --i;
  }

  return n;
}
