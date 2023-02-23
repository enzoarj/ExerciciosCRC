//Elabore um algoritmo que receba o salário de um funcionário, calcule e
//mostre o novo salário, sabendo-se que este salário sofreu um aumento de 25%.

let Atualsalario = parseFloat(prompt("Qual seu salario atual?"));
var reajustesalario = 1.25;
let Novosalario = Atualsalario * reajustesalario;

console.log(`Novo salario sera de R$:${Novosalario}.`);

