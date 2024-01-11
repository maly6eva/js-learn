function isEmpty(obj) {
  let condition = true;

  for (let key in obj) {
    condition = false;
  }

  return condition;
}
