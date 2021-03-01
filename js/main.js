/* É possível colocar as funções Javascript dentro do arquivo HTML,
ou criar um arquivo .js com as funções */
//var nome = "Breno Pinheiro de Oliveira"; //também é possível criar variáveis
/* o tipo de varoiável foi identificado automaticamente pelo uso das aspas.
quando se usa aspas, automaticamente é detectado ser uma string. */

var d = new Date () // puxa a data e a hora atual
alert (d.getMinutes()) // mostra um pop-up com o minuto da hora atual
/* var idade = prompt ("Qual é a sua idade?"); // abre um pop-up solicitando dados com a frase escrita dentro do parênteses, que serão gravados na variável "idade"
var idade2 = 20;
var lista = ["maçã", "pêra", "laranja"]
var frase = "Eu amo a Isabela mais do que ela me ama"
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome : "uva", cor: "roxa"}] // é um dicionário de um objeto json
// alert("pop-up da página do " + nome + ", que tem " + idade + " anos.");
// alert (idade + idade2)  Resultado = abre um pop-up escrito "40"
console.log (nome) //quando usamos esse comando, é impresso o que estiver
console.log (idade) // dentro do parêntese no console do navegador (Inspecionar)
console.log (frase.replace ("amo", "amo muito mais")) /* dessa forma, eu troquei
"amo" para "amo muito mais"*/
// console.log( frase.toUpperCase()) - a variável frase é impressa em caixa alta
//console.log(frase.toLowerCase()) - a variável frase é impressa em minúsculo
//alert(frase.replace ("amo", "amo muito mais")) - Também é possível usa essa função no alert
/*lista.push("uva") // inseriu "uva" à lista
lista.pop() // removeu "uva" da lista
console.log(lista) //imprimiu a lista toda em forma de array
console.log(lista[1]) // imprimiu só o item 1, lembrando que o 0 é um item.
console.log(lista.length) //imprime o tamanho da lista
console.log(lista.reverse()) //imprime a lista na ordem invertida
console.log(lista.toString()) //imprime em forma de string
console.log(lista[0]) 
console.log(lista.toString()[0]) //imprime a primeira letra
console.log(lista.join(" a ")) /* coloca o que estiver dentro do parênteses
entre os elementos da lista */
/*console.log (frutas) // imprime o dicionário frutas
//console.log(fruta.nome) //imprime o que for "Nome" no dicionário
//console.log(fruta.cor) //imprime o que for "cor" no dicionário
//console.log(frutas [1].nome) // imprime "uva"
/*if (idade > 18){
    alert ("maior de idade")
} else {
    alert ("Menor de idade")
}

while (count <= 5){
    console.log (count)
    count = count + 1
} //imprime o "count" até ele ser igual a 5
for (count=0; count <=5; count++){ // declaramos o count
    console.log(count)
} //imprime o "count" até ele ser igual a 5*/