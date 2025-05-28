//objetos
var objeto ={
    "nome":"jonathan",
    "idade": 32,
    "profissao atual":"cobrador",
    "profissao futura":"programador",
    "habilidades": ["javascript", "html", "css"],
    "chave":{"chave1":"valor1", "chave2":"valor2"}

}
//acessando o objeto
console.log(objeto["nome"]); //jonathan
console.log(objeto.idade); //32
console.log(objeto["profissao atual"]); //cobrador
console.log(objeto["profissao futura"]); //programador
console.log(objeto.habilidades[0]); //javascript
console.log(objeto.habilidades[1]); //html
console.log(objeto.habilidades[2]); //css
console.log(objeto.chave.chave1); //valor1
console.log(objeto.chave.chave2); //valor2
//adicionando uma nova chave
objeto.novaChave = "novo valor";
//acessando a nova chave

console.log(objeto.novaChave); //novo valor
//removendo uma chave
// delete objeto.novaChave;
//acessando a chave removida
// console.log(objeto.novaChave); //undefined