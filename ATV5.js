//Faça um algoritmo que receba o peso e a altura de uma pessoa e
//calcule o índice de massa corpórea. Ele mede a relação entre peso e altura
//Fórmula do índice de massa corpórea = kg / ( altura * altura )


let peso_atual = parseFloat(prompt("Digite seu peso atual em kg:"));
let altura_atual = parseFloat(prompt("Digite sua altura:"));

let indice = peso_atual / (altura_atual * altura_atual);

console.log (indice.toFixed(2));