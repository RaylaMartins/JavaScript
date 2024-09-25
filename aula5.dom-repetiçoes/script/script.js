function teste(){
    //document = refere ao documento html
    //getElement = buscar um elemento (id,class,tag)
    // .value = buscar o valor dentro do input
   var inputTeste = document.getElementById("inputTeste").value

    //.innerHtml = colocar algo dentro do elemento comtag
    //.innerText = colocar algo dentro do elemento apenas texto
   document.getElementById("resposta").innerHTML += `

     <div class = "elementos">
     ${inputTeste}
     
     </div>
   
   `
}

function repeticao(){
  //enquanto(condicao) faca fimEnquanto
  let contador = 0
  while(contador <= 10){
    document.getElementById("resposta2").innerHtml += "*"
    contador++
  }

  for(let i = 0;i <= 10;i++){
    document.getElementById("resposta2").innerHTML +- i
  }

}

function lista(0){

   var livros = [true,"string",100,[]]
   console.log(livros)[2]

   var listaProdutos = ['Livros', 'Revistas', 'Apostilas']

   listaProduto.forEach(produto => {
    documento.getElementById("respostas").innerHTML += `
    <div class "elementos">
        ${produto}
    </div>
    `

   });

}