// Determina aprovados para a segunda etapa
function primeiraEtapa(acertos_na_prova, semestre_cursados){
    /*
    *help:
    *acertos_na_prova recebe a quantidade de acertos do aluno na prova
    *semestres_cursado: semestres cursados
    */
   const total_de_questao = 20;
   const nota_minima_aprovacao = 0.7
   const minimo_semestres = 3

   //Calcula a nota %
   let nota = acertos_na_prova / total_de_questao;

   //calcula se vai ser aprovado ou nao
   if ((nota >= nota_minima_aprovacao)&&( semestre_cursados >= minimo_semestres)){
        return "Aprovado";
   }
   else if(nota >= nota_minima_aprovacao){
        return "Vocé foi adicionado ao nosso banco de currículos";
   }
   else{
    return "Reprovado";
   }
}

console. log(primeiraEtapa(15, 5));