function ex1(){

}

function ex2(){
    let numero = (document.querySelector("#inputEx2").value)

    // let contador = 0
    // while (contador <= 10){

    //     contador++
    // }

    if(numero == 0){
        document.querySelector("#respostaEx2").innerHTML
    }

    else(){
        

    }

    for(let contador = 0;contador <= 10;contador++){
        let calcule = numero * contador

        document.getElementById("respostaEx2").innerHTML +=
        <p> ${numero} x ${contador} = ${calculo} </p>
    }
}