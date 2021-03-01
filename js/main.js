function botao(){
   // document.getElementById("agradecimento") - é possível pegar um elemento pela id no javascript
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!"// dessa forma, injetamos um texto no "agradecimento"
   
    // document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!" - é possível adicionar outras coisas além de um texto simples, como um texto em negrito, itálico, números, etc.
   // console.log(document.getElementById("agradecimento"))
   // alert("Obrigado por clicar")
}
function redirecionar(){
    //window.open("https://www.cruzeiro.com.br/") //abre o link em uma nova página
    window.location.href = "https://www.cruzeiro.com.br/" //abre o link na mesma página

}
function trocar(elemento){ //colocar elemento quando usar o (this)
    //alert("Mouse passado com sucesso")
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
}
function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui" // usamos o "elemento" ao invés do "document"
    
}
function load(){
    alert("Página carregada")
}
function funcaoChange(elemento){
    console.log(elemento.value) // o .value, le o valor da opção
}


