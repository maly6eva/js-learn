function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
  // ваш код...
}
let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) );
