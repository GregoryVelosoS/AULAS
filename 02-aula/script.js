// // Interação com o usuário via prompt
// //var nome = prompt("Digite um nome:")
// //alert("Seu nome é: " + nome)

// //CONDICIONAIS

// // SE, SENÃO SE, SENÃO
// // IF, IF ELSE, ELSE

// var estaVivo = 7 

// if(estaVivo == true){
//     console.log("Parabéns, você está vivo")
// }
// else if (estaVivo == false){
//     console.log("Infelizmente, estás muerto 💀!!!");   
// }
// else{
//     console.log("Você não tá nada, virou sei lá")
// }


// // ESCOLHA / CASO
// // SWITCH  / CASE

// var corCamisa = "Amarela"

// switch(corCamisa){
//     case "Azul":
//         console.log("Você ganhou um voucher")
//     break
//     case "Amarela":
//         console.log("Você ganhou um body splash")
//     break
//     case "Vermelha":
//         console.log("Você ganhou um brinde")
//     break
//     default:
//         console.log("Cor de camisa inválida")
//     break
// }


// // ATIVIDADE NOTA
// // Até 5 = reprovado, 5 a 6 = recuperação, 
// // acima de 6 = passou

// var nota = prompt("Digite sua nota: ")

// if(nota > 6){
//     console.log("Parabéns, você passou !");
// }
// else if (nota >= 5 && nota <= 6){
//     console.log("Vai ter que fazer recuperação")
// }
// else{
//     console.log("Infelizmente vosse reprovou")
// }


// Criar variáveis 
var idade1 = prompt("Digite a idade 1: ")
var idade2 = prompt("Digite a idade 2: ")

var ingresso1, ingresso2

// Definir valor do primeiro ingresso
if(idade1 <= 17){
    ingresso1 = 15
}
else if (idade1 >= 18 && idade1 < 60){
    ingresso1 = 30
}
else{
    ingresso1 = 20
}






// Definir valor do primeiro ingresso
if(idade2 <= 17){
    ingresso2 = 15
}
else if (idade2 >= 18 && idade2 < 60){
    ingresso2 = 30
}
else{
    ingresso2 = 20
}

var valorFinal = ingresso1 + ingresso2

console.log("O preço final foi: " + valorFinal)

alert("O preço final foi: " + valorFinal)