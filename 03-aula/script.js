console.log("VAMO Q VAMO")

// LAÇOS DE REPETIÇÃO
// PARA = FOR 
for(var i = 0; i < 5; i++){
    console.log("Ainda estoy ahí")
    console.log("Ainda estoy aqui")
}
console.log("Acabou de repetir");

// ENQUANTO = WHILE
var contagem = 0
while(contagem < 10){
    console.log("Estou repetindo infinitamente"); 
    contagem++
}

// Exercício 1 
// var numeroEscolha = prompt("Digite um número:")

// for(var i = 0; i <= numeroEscolha; i++){
//     console.log("Contagem:" , i)
// }

// Exercício 2
// var senha = "0"
// var senhaCorreta = "7"

// while(senha != senhaCorreta){
//     var senha = prompt("Digite uma senha: (Dica: Número do milior)")
// }

// console.log("Você entrou !!!");


//FUNÇÕES

// Cria a função
function bemVindo(){
    var nome = prompt("Nome: ")
    console.log("Olá, ", nome)
}

// Chama a função
bemVindo()

// Função com parametros
function calcularIdade(idade){
    alert("Sua idade é: "+ idade)
}

calcularIdade(18)
calcularIdade(100)


// Exercício 3
function maior(valor1, valor2) {
    if (valor1 > valor2) {
        console.log("O primeiro valor é maior");
    } 
    else if(valor1 < valor2){
        console.log("O segundo valor é maior");
    }
    else{
        console.log("Os valores são iguais");
    }
}

var numero1 = prompt("Digite um número: ")
var numero2 = prompt("Digite outro número: ")

maior(Number(numero1), Number(numero2))


// FUNÇÕES COM RETORNO
function soma(valor1, valor2){
   let resultado = valor1 + valor2
   
   return resultado 
}

var valorSomado = soma(7, 6)

console.log("A soma deu: ", valorSomado);
