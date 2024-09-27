class Cliente{
    nome;
    cpf;
    nConta;
    email;
    saldo;
    credito;
    fazerCompra(valor){
        if(this.saldo >= valor){
          this.saldo = this.saldo - valor;
          return ("Compra efetuada com sucesso");
        }else{
            return("Saldo insuficiente")
        }
    }
    transferir(valor,cliente){
        if(this.saldo >= valor){
       this.saldo = this.saldo - valor
        return `O valor de R$ ${valor} foi 
        tranferido para o usuário ${cliente}`
    }else{
        return "A transferencia não pode ser efetuada! Saldo insuficiente";
    }
}

    receber(valor){
        this.saldo = this.saldo + valor
        return `O valor de R$ ${valor} foi
        recebido do usuario ${cliente}`
    }

}

var cliente1 = new Cliente();
console.log(cliente1)
cliente1.nome = "Leonardo"
cliente1.cpf = "77777777"
cliente1.nConta = "001"
cliente1.email = "umemailmaneirodemais@gamil.com"
cliente1.saldo = "0"
cliente1.credito = "2000"


// console.log(cliente1.fazerCompra(2000))
// alert(cliente1.fazerCompra(2000))