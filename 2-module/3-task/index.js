let calculator = {
  read (a, b) {
    calculator.a = a;
    calculator.b = b;
    return calculator
  },
  sum (a, b) {
    return this.a + this.b
  },
  mul (a, b) {
    return this.a * this.b
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
