//Faça um programa que receba a largura e a altura de uma parede em
//metros, e calcule a sua área e a quantidade de tinta necessária para
//pintá-la, sabendo que cada litro de tinta, pinta uma área de 2m2.

let largura = parseFloat(prompt("Quantos metros de largura?"));
let altura = parseFloat(prompt("Quantos metros de altura?"));

var totalarea = largura * altura;
var tinta = totalarea / 20.000;
console.log(`Sua area quadrada é de ${totalarea}m e precisará de ${tinta} litros de tinta`);
