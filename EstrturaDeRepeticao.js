// laços de repetiçao (interadres)
//for=> para
//while => enquanto
// DO ...while => faça ... enquanto


/*var i = 0; // inicializa a variavel i com 0

do{
    console.log(i);
    i++;
}while(i<10); //enquanto i for menor que 5, o laço sera executado

// o laço do...while garante que o bloco de código seja executado
//  pelo menos uma vez, mesmo que a condição seja falsa na primeira iteração. 



// contagem de dois em dois etc.
var i = 0;
do{
    console.log("do",i);
    i++; //incrementa i de 2 em 2
}while(i < 10);
// o laço do...while garante que o bloco de código seja executado
 
i = 0; // reinicializa a variavel i com 0

while(i < 10){
    console.log("while", i);
    i++; // incrementa i de 1 em 1
}
*/

lista_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // cria uma lista de numeros de 1 a 10 array
for ( i in lista_numeros){
    console.log("for", i, lista_numeros[i]); // imprime o indice e o valor do elemento da lista
}