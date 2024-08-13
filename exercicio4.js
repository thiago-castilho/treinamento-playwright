// 4. Condições
// 10.	Estrutura Condicional Simples
// Crie uma função que receba um número e verifique se ele é positivo, negativo ou zero. 
// Exiba uma mensagem correspondente no console.
const listaDeNumeros = new Array(0, -1, 2, -3, 4, 5, -6, 7, -8, 9, 10);

for (let numero of listaDeNumeros) {
  if (numero < 0) {
    console.log("O número " + numero + " é um número negativo.");
  } else if (numero == 0) {
    console.log("O número " + numero + " é zero.");
  } else {
    console.log("O número " + numero + " é um número positivo.");
  }
}


// 11.	Condicional if...else if...else
// Crie uma função que receba um valor e verifique se ele é um número, uma string ou um booleano. 
// Exiba uma mensagem informando o tipo do valor.
const listaDeDados = new Array(0, "1", false, -3, 4, "5", "-6", 7, true, 9, 10);

for (let tipo of listaDeDados) {
  if (typeof tipo == 'number') {
    console.log("O tipo de " + tipo + " é number.");
  } else if (typeof tipo == 'string') {
    console.log("O tipo de " + tipo + " é string.");
  } else if (typeof tipo == 'boolean') {
    console.log("O tipo de " + tipo + " é boolean.");
  }
}

// 12.	Condicionais e Operadores Lógicos
// Crie uma função que receba dois números e verifique se ambos são maiores que 10 e se pelo menos um deles é par. 
// Retorne true ou false dependendo do resultado e exiba o retorno.

function verificarNumeros(num1, num2) {
  // Verifica se ambos os números são maiores que 10
  const ambosMaioresQueDez = num1 > 10 && num2 > 10;

  // Verifica se pelo menos um dos números é par
  const peloMenosUmPar = num1 % 2 === 0 || num2 % 2 === 0;

  // Retorna true se ambas as condições forem verdadeiras, caso contrário, retorna false
  return ambosMaioresQueDez && peloMenosUmPar;
}

console.log(verificarNumeros(12, 15));
console.log(verificarNumeros(-11, 15));
console.log(verificarNumeros(12, 0));
console.log(verificarNumeros(20, 100));