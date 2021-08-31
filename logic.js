switch (opr) {
  case "add":
    return num1 + num2;
  case "divide":
    return num1 / num2;
  case "subtract":
    return num1 - num2;
  case "multiply":
    return num1 * num2;
  default:
    return 0;
}

//parseInt() will take a string and return an integer

function calculate(num1, operator, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (operator === "sum") {
    return num1 + num2;
  }
  if (operator === "substract") {
    return num1 - num2;
  }
  if (operator === "multiply") {
    return num1 * num2;
  }
  if (operator === "divide") {
    return num1 / num2;
  }
}
