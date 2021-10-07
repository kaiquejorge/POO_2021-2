//function sacar(conta:any, valor:number):boolean{
//    if(valor <= conta.saldo){
//        conta.saldo -= valor;
//        return true;
//    }else{
//        console.log("Saque não autorizado: saldo insuficiente!")
//        return false;
//    }
//}

// Atributos: titular da conta, saldo // Métodos: depositar, sacar
// nos atributos definimos o nome e o tipo //
// Atributo nome:tipo //

class Conta {
    nome_titular:string = "";
    saldo: number = 0;

// o constructor só é chamado uma vez, que é na instanciação/ criação do objeto

    constructor(nome_titular:string, saldo_inicial:number){
        this.nome_titular = nome_titular;
        this.saldo = saldo_inicial;
    }

    depositar(valor: number){
        this.saldo += valor;
    }

    sacar(valor: number):boolean{
        if(valor <= this.saldo){
            this.saldo -= valor;
            return true;
        }else{
            console.log("Saque não autorizado: saldo insuficiente!")
            return false;
        }
    }

}

let conta:Conta = new Conta("Kaique", 30);
conta.saldo = 30;
conta.depositar(10);
conta.sacar(30);
conta.sacar(50);
console.log(conta);

let conta1:Conta = new Conta("Carmem", 50);
conta1.saldo = 50;
conta1.depositar(20);
console.log(conta1);

let listas_de_contas:Conta [] = [];
listas_de_contas.push(new Conta("José", 50));
listas_de_contas.push(new Conta("Filipe", 60));

console.log(listas_de_contas);

//modos de iteração

for(let i:number = 0; i < listas_de_contas.length; i++){
    listas_de_contas[i].depositar(20);
}
console.log(listas_de_contas);

for(let i in listas_de_contas){
    listas_de_contas[i].depositar(30);
}
console.log(listas_de_contas);

for(let c of listas_de_contas){
    c.depositar(40);
}
console.log(listas_de_contas);
    


//depositar(conta, 10);
//console.log(conta.saldo);

//sacar(conta, 5);
//console.log(conta.saldo);

//sacar(conta, 15);
//console.log(conta.saldo);

// fazendo outra conta dentro da conta
//let conta1 = criar_conta("Carmem", 1000);

//sacar(conta1, 100);
//console.log(conta1.saldo);