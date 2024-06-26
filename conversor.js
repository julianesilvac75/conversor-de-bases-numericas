// Decimal para binário (apenas inteiros)

function divide(dividend, divisor) {
  let temporaryResult = false;
  let result = "";
  let updatedDividend = dividend;
  
  while (!temporaryResult) {
    let quotient = Math.floor(updatedDividend / divisor);
    let rest = updatedDividend % divisor;
    result = rest + result;

    if (quotient > 0) {
      updatedDividend = quotient;
    } else {
      temporaryResult = true;
    }
  }

  return result;
}

function decimalToBinary(dec) {
  return divide(dec, 2);
}

// Binário para decimal
// ........


//Prática de aula:
console.log("Temperatura do ar:", decimalToBinary(26));
console.log("Velocidade do vento:",decimalToBinary(19));