let calculator = {
  a: null,
  b: null,


  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },

  read(a, b) {
    // read(3, 5);
    // console.log(calculator)




    this.a = +prompt('a?', '');
    this.b = +prompt('b?', '');

  }

  // ваш код
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально


