// functions
function soma(a, b){
    let operacao = a + b;
    return operacao;
}

// chamada da função
let resultado = soma(2, 4);
// exibe o resultado
console.log("Resultado da soma: " + resultado);

const soma2 = (a,b) => a + b;
// chamada da função
console.log(soma2(5, 30));
// função anônima