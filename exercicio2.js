var hora = 9; // define a hora começando em 9
var minutos = 15; // define os minutos começando em 0
var total_entrevistas = 0; // inicializa o contador de entrevistas
var saida = 17; // inicializa a variável de saída

var entrecistados = [
    "José da Silva",
    "Antônio de Sá",
    "Felipe Augusto",
    "Carla Moreira",
    "Pedro Malta",
    "Maria Sousa",
    "Marta da Silva",
    "Fausto Augusto",
    "Silvio Sávio",
    "Maísa Silva",
    "Lucas Lopes",
    "Zenildo Santos",
    "Bruno Lucas",
    "Luana Melo",
    "Felipe Santos",
    "Flávio Miguel",
    "Lauro Maria",
    "Juca dos Santos",
    "Luciana Carla",
    "Felipe Silva",
    "André Manuel",
    "Pedro Parker",
    "Ana Maria",
    "Thiago Melo"
]; // inicializa o array de entrevistas
// ordena o array de entrevistas
entrecistados.sort()

// horas
for (var i = hora; i < saida; i++) { // loop de 9 até 17
    
    if((i == 12)||(i == 13)){ // verifica se a hora é 12 ou 13
        continue // pula para a próxima iteração se for 12 ou 13
    }

    // minutos
    for (j = 0; j < 60; j=j+minutos){
        total_entrevistas++; // incrementa o contador de entrevistas

        if (j == 0){
            console.log(i+":"+j+0, entrecistados[total_entrevistas -1]); // imprime a hora e o entrevistado
        }
           else{
            console.log(i+":"+j, entrecistados[total_entrevistas -1]); // imprime a hora e o entrevistado
        }
    }
}