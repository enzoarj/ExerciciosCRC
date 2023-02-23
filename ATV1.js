// Elabore um algoritmo que tenha dois valores para as variáveis A e B,
// efetue a troca dos valores de forma que a variável A passe a ter o valor da
// variável B, e que a variável B passe a ter o valor da variável A. Ao final,
// imprima os valores com a troca efetuada.

var a = 10;
var b = 50;

console.log("Valores inicial: A = " + a + " e B = " + b);

a = a + b;
b = a - b;
a = a - b;
console.log("Valores após a troca: A = " + a + " e B = " + b);