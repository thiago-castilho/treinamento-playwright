//1. Manipulação de Variáveis
// 1.	Declaração e Atribuição de Variáveis
// Crie uma variável nome e atribua seu nome a ela.
// Crie outra variável idade e atribua sua idade.
// Exiba essas variáveis usando console.log.
const nome = "Thiago";
const idade = 27;
console.log("Meu nome é " + nome + " e eu tenho " + 27 + " anos.");

// 2.	Troca de Valores
// Crie duas variáveis, a e b, e atribua a elas valores distintos. 
// Troque os valores entre a e b sem usar uma variável auxiliar e exiba os valores após a troca.
let a = 1;
let b = 2;
console.log("Valor atual de a: " + a);
console.log("Valor atual de b: " + b);
a = 2;
b = 1;
console.log("Novo valor de a: " + a);
console.log("Novo valor de b: " + b);


// 3.	Concatenando Strings
// Crie duas variáveis do tipo string, saudacao e nome, e combine-as para formar uma mensagem completa (por exemplo, "Olá, João!").
// Exiba a mensagem resultante.
const meuNome = "Thiago";
let saudacao = `Olá, ${meuNome}!`;
console.log(saudacao);

