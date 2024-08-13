// 5. Desafios Adicionais
// 14.	Calculadora Simples
// Crie uma função que receba dois números e uma operação (como '+', '-', '*', '/'). 
// Retorne o resultado da operação e trate os casos onde a operação não é válida.

function calculadora(num1, num2, operacao) {
  let resultado;

  switch (operacao) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      // Verifica se o divisor é zero antes de realizar a divisão
      if (num2 === 0) {
        return "Erro: Divisão por zero!";
      }
      resultado = num1 / num2;
      break;
    default:
      return "Operação inválida!";
  }

  return resultado;
}

console.log(calculadora(10, 5, '+'));  // Saída: 15
console.log(calculadora(10, 5, '-'));  // Saída: 5
console.log(calculadora(10, 5, '*'));  // Saída: 50
console.log(calculadora(10, 5, '/'));  // Saída: 2
console.log(calculadora(10, 0, '/'));  // Saída: "Erro: Divisão por zero!"
console.log(calculadora(10, 5, '%'));  // Saída: "Operação inválida!"

