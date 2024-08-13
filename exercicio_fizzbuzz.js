// 5. Desafios Adicionais
// 13.	FizzBuzz
// Escreva um loop que conte de 1 a 30.
// Para números múltiplos de 3, exiba "Fizz"; para múltiplos de 5, exiba "Buzz";
// para múltiplos de ambos, exiba "FizzBuzz"; caso contrário, exiba o número.

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");  // Múltiplo de 3 e 5
  } else if (i % 3 === 0) {
    console.log("Fizz");  // Múltiplo de 3
  } else if (i % 5 === 0) {
    console.log("Buzz");  // Múltiplo de 5
  } else {
    console.log(i);  // Não é múltiplo nem de 3 nem de 5
  }
}





