// comentário de uma linha só

/*
    comenta
    várias
    linhas
*/

//console.log = escreva do portugol
console.log("UMA MENSAGEM TOP AQUI") // Tá comentado

// Cria uma janela de alerta ne págine
// alert("TESTA AI E VÊ")

// VAR cria uma variável na tela
var nome = "Cris"
console.log("O nome é:" + nome)

// Cadeia = String
var texto = "Santos"
console.log( typeof(texto) )

// inteiro = number, int 
var numero = 1989
console.log( typeof(numero) )

// real = number, float 
var quebrado = 1.9
console.log( typeof(quebrado) )

// lógico = bool
var VouF = true
console.log( typeof(VouF) )

// Valor nulo 
var nulo = null
console.log( typeof(nulo) )

// Variável sem valor iniciado
var indefinido = undefined
console.log( typeof(indefinido) )

// Operadores aritiméticos
// +,-,*,/,%

var a = 10
var b = 3

console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Módulo:", a % b);

// Operadores lógicos
// e, ou, nao
// &&, ||, ! = not

var verdade = true
var mentira = false

// Comparação com E
console.log( verdade && verdade )

//Comparação com OU
console.log( verdade || mentira )

//Comparação com negação 
console.log( !verdade && mentira )


//Operadores Relacionais
// >, <, >=, <=, ==, !=, ===, !==

var v1 = 7
var v2 = 15
var v3 = "7"

console.log(v1 > v2);
console.log(v1 < v2);
console.log(v1 >= v2);
console.log(v1 <= v2);
console.log(v1 == v2);
console.log(v1 != v2);

console.log(v1 == v3) // Compara só valor
console.log(v1 === v3)// Compara valor e tipo
console.log(v1 !== v3)// Compara valor e tipo


// Interação com o usuário via comando prompt
var numero = prompt("Digite um número:")
var numero2 = prompt("Digite outro número:")

var resultado = Number(numero) + Number(numero2) 

console.log("O resultaldo é:", resultado)

alert("O resultaldo é:" + resultado)