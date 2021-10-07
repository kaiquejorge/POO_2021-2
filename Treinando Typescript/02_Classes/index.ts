function depositar(conta:any, valor:number):void{
    conta.saldo += valor;
}
function sacar(conta:any, valor:number):boolean{
    if(valor <= conta.saldo){
        conta.saldo -= valor;
        return true;
    }else{
        console.log("Saque não autorizado: saldo insuficiente!")
        return false;
    }
}

// função que determina criação de objetos sempre nesse formato
function criar_conta(nome_titular:any, saldo_inicial:number){
    return {
        "nome_titular": nome_titular,
        "saldo": saldo_inicial
    }
}

let conta = criar_conta("Kaique", 0);

depositar(conta, 10);
console.log(conta.saldo);

sacar(conta, 5);
console.log(conta.saldo);

sacar(conta, 15);
console.log(conta.saldo);

// fazendo outra conta dentro da conta
let conta1 = criar_conta("Carmem", 1000);

sacar(conta1, 100);
console.log(conta1.saldo);