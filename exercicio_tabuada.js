// 5. Desafios Adicionais
// 15.	Tabuada
// Crie uma função que receba um número e exiba a tabuada desse número de 1 a 10.
function exibirTabuada(numero) {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
exibirTabuada(7);  