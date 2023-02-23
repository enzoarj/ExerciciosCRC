//Faça um algoritmo que receba as horas e converta em minutos.
// Exemplo - Quantas horas equivale a 350 minutos?

let quehorassao = parseFloat(prompt("Que horas?:"));

var calculohoras = quehorassao * 60;

console.log (`Suas horas em minutos é:${calculohoras} minutos`)
 


// OBS: Fiquei em duvida, no comando pede que receba horas e converta em minutos, porem no exemplo pede ao contrario disso, entao coloquei um exemplo para converter minutos para horas.


let minutos = parseInt(prompt("Digite os minutos para converter para horas"));

var conversor = minutos / 60;

console.log(`Seus minutos em horas é: ${conversor.toFixed(2)} horas.`)