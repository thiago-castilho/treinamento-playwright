// 2. Tipos de Dados e typeof
// 4.	Identificação de Tipos de Dados
// Declare variáveis de diferentes tipos de dados (string, number, boolean, object, array, null). 
// Use o operador typeof para verificar e exibir o tipo de cada variável.
let variavel1 = "Thiago";
let variavel2 = 27;
let variavel3 = false;
var variavel4 = new Array(1, 2, 3, 4, 5);

console.log(typeof variavel1);
console.log(typeof variavel2);
console.log(typeof variavel3);
console.log(typeof variavel4);


// 5.	Verificação de Tipos
// Crie uma função que aceite um parâmetro e use typeof para retornar uma string indicando o tipo do parâmetro 
// (por exemplo, "É uma string", "É um número", etc.).

function retornaTipo(parameter) {
  return `${parameter} é do tipo ` + typeof parameter;
}
console.log(retornaTipo("Thiago"));
console.log(retornaTipo(27));
console.log(retornaTipo(true));

// 6.	Operações com Tipos de Dados
// Declare uma variável com um valor numérico e outra com um valor string. 
// Tente somá-las e observe o resultado. 
// Explique por que o resultado é o que você esperava.
let tipoNumero = 2;
let tipoString = "4";

const resultado = tipoNumero + tipoString;
console.log(resultado);
console.log("Os dois valores foram concatenados em vez de somados. Isso acontece porque quando utilizamos o sinal de + com tipos de dados diferentes, o JavaScript converte o número em uma string e realiza a concatenação.");

// Convertendo a String para número e somando
const resultado2 = tipoNumero + parseInt(tipoString);
console.log(resultado2);
console.log("Os valores foram somados corretamente porque a função parseInt() converteu a string '4' em um número antes da operação de adição. Agora ambos os valores são números, então a soma é realizada como esperado.");
