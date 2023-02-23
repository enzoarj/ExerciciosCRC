//Elabore um algoritmo que receba o ano de nascimento de uma pessoa,
//e o ano atual, calcule e mostre:
//a. A idade dessa pessoa em anos
//b. A idade dessa pessoa em meses
//c. A idade dessa pessoa em dias
//d. A idade dessa pessoa em semanas
//Obs: Considere que o ano a ser informado deverá ser menor ou igual ao ano atual

let seuano = parseInt(prompt("Qual seu ano de nascimento:"));
let anoatual = parseInt(prompt("Qual seu ano atual?"));

var idadeanos = seuano - anoatual;
var idademeses = idadeanos * 12;
var idadedias = idadeanos * 365;
var idadesemanas = idadeanos * 52;

console.log(`Sua idadade atual é de ${idadeanos}, sua idade em meses é ${idademeses}, você viveu por ${idadedias} dias e ${idadesemanas} semanas.`)