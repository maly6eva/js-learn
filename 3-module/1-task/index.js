let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];


const user = users.map(namify => {
  return namify.name;
});
// ваш код
console.log(user);
