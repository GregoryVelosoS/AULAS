console.log("Oi")

// Com array 

var alunos = ["Pedro","Tiago","João"]
var media =  [7,8,6]

console.log("O aluno: ", alunos[0], " teve media: ", media[2])


// Com objeto 
var estudante = {
    nome : "Cristiano",
    nota1 : 8,
    nota2 : 9,
    media : 8.5,
} 

// Acessa uma propriedade daquele objeto
console.log(estudante.nome);
console.log(estudante.nome, "=", estudante.media);

// Crie um novo objeto da escola, com 4 propriedades
var intervalo = {
    tempoTotal : "20 min",
    horaInicio : "15h30",
    horaFim: "15h50",
    local: "Pátio",
    dormir : true
}

// Relacionando as duas informações
console.log(intervalo.horaInicio, " até ", intervalo.horaFim)

//Outra forma de acessar propriedade
console.log("Onde:", intervalo["local"])

// Criando um objeto vazio
var garrafa = {}
console.log(garrafa);

// Adicionando novas propriedades
// em um objeto já existente
garrafa.preco = 430
garrafa.cor = "Amarelo"
garrafa.tamanho = 2.5
garrafa["validade"] = "1 ano"

console.log(garrafa);

// Alterando o valor de uma propriedade
// que já existe
garrafa.preco = 429.99
garrafa["validade"] = "2 anos"
console.log(garrafa);

// Criar uma nova propriedade através de uma variável
var novaPropriedade = "apelido"
garrafa[novaPropriedade] = "Aristóteles"
console.log(garrafa.apelido);


// Criar funções
var animal = {
    // Variáveis = Propriedades
    nome: "Luke",
    especie: "Lagarto",
    raca: "Adidas",
    // Função = Método
    andar: function(){
        console.log("Estou andando")
    },
    latir: function(){
        console.log("AU MIAU")
    }
}

console.log("O nome é: ", animal.nome)

animal.andar()
animal.latir()