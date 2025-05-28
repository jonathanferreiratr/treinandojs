/* arrays

var cmarray = [1, 2, 3, 4, "texto", "texte", true, false,[1, 2, 3]]

cmarray.push("novo texto"); // adiciona um novo elemento ao final do array

console.log(cmarray);

var dado_removido = cmarray.pop(); // remove o último elemento do array

console.log(dado_removido); // exibe o elemento removido


var posicao = cmarray.indexOf("texto"); // encontra a posição do elemento "texto"
console.log(posicao); // exibe a posição do elemento*/


var cmarray = [1, 5, 10, 54, 9, 15, 66, 2, 4, 99];
cmarray.sort((a, b) => a -b); // ordena o array em ordem alfabética e numericas 
console.log(cmarray); // exibe o array ordenado