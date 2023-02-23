//Elabore um algoritmo que receba o ano de nascimento de uma pessoa, e
//o ano atual, calcule e mostre:
//a. A idade dessa pessoa
//b. Quantos anos essa pessoa terá em 2010


let anonascimento = parseInt(prompt("Digite o ano de seu nascimento: "));
let anoatual = parseInt(prompt("Digite o ano atual: "));
let idade = anoatual - anonascimento;

console.log("idade atual dessa pessoa é de " + idade + " anos");


let idade2010 = 2010 - ano_nascimento;
console.log("Idade da pessoa em 2010 é " + idade2010 + " anos");
