// Declarando as variáveis A e B
var a = 5;
var b = 10;

// Imprimindo os valores iniciais
console.log("Valores iniciais: A = " + a + " e B = " + b);

// Trocando os valores das variáveis A e B
a = a + b;
b = a - b;
a = a - b;

// Imprimindo os valores após a troca
console.log("Valores após a troca: A = " + a + " e B = " + b);
