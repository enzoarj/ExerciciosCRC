//Alguns países medem temperaturas em graus Celsius, e outros em graus
//Fahrenheit. Faça um algoritmo para ler uma temperatura Celsius e imprimi-la em Fahrenheit.
//Fórmula - C * 1,8 + 32 - Sendo C o grau Celsius.

let temperaturaatual = parseInt(prompt("Digite a temperatura atual:"));
var formula = temperaturaatual * 1.8 + 32;

console.log(formula);