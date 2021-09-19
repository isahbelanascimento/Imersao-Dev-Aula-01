var nome = prompt("Digite o nome do aluno(a)")

var nota1 = Number(prompt("Digite a nota do 1º Bimestre"))
var nota2 = Number(prompt("Digite a nota do 2º Bimestre"))
var nota3 = Number(prompt("Digite a nota do 3º Bimestre"))
var nota4 = Number(prompt("Digite a nota do 4º Bimestre"))

var notaFinal = (nota1 + nota2 + nota3 + nota4)
var Media = (notaFinal / 4)

prompt("Sua média final é " + Media)

 if (Media => 6) {
   prompt("Você foi aprovado(a)!")
 }
 else if (Media =< 5) {
    prompt("Você está de recuperação!")
 }
