// 3. Loops
// 7.	Loop for Básico
// Escreva um loop for que conte de 1 a 10 e exiba cada número no console.
for (let i = 1; i <= 10; i++) {
  console.log("Loop For: " + i);
}

// 8.	Loop while
// Crie um loop while que exiba todos os números pares de 0 a 20.
let contador = 0;
while (contador <= 20) {
  if (contador % 2 == 0) {
    console.log("Loop While: " + contador);
  }
  contador++;
}


// 9.	Loop for...of
// Dada uma lista de nomes(array de strings), use um loop for...of para exibir cada nome no console.
const listaDeNomes = new Array("Thiago", "Lucas", "Ellen", "Jhonatan", "Valter", "Luciene", "Vinicius");

for (let nome of listaDeNomes) {
  console.log(nome);
}