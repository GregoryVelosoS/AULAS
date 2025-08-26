var aluno = {
    nome : "Rodolfo", 
    anoEscolar: "2°",
    turma: "C",
    notas: [6, 8, 7],
    estudar: function(){
        console.log("Estou estudando")
    },
    // metodo com função interna
    media : function(n1,n2,n3){
        return ((n1+n2+n3) / 3)
    },
    // método com função externa
    ocorrencias: listaDeOcorrencias
}
// Acessa as propriedades do objeto aluno
console.log("O aluno", aluno.nome, "está no ", aluno.anoEscolar, "ano escolar.");
// Executa um método de dentro do objeto
aluno.estudar()
console.log("Média final:", aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]));
//Cria função externa para utilização do objeto
function listaDeOcorrencias(){
    console.log("Comeu na biblioteca");
    console.log("Xingou no corredor da escola");
    console.log("Não fez o trabalho");
}