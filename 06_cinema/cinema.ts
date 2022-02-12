class Cliente {
    id: string;
    fone: number;
    email: string;
    cpf: number;
    constructor(id: string, fone: number, email: string, cpf: number) {
        this.id = id;
        this.fone = fone;
        this.email = email;
        this.cpf = cpf;
    }
}
// get controla o acesso e o set controla a modificação

class Sala {
    fileira: Array <Cliente | null>;
    constructor(qtdCadeiras: number){
        this.fileira = []
        for(let i = 0; i < qtdCadeiras; i++){ // inseriu varias cadeiras nulas na fileira
            this.fileira.push(null); 
        }
    }
    validarPosicao(posicao: number): boolean {
        if(posicao < 0 || posicao >= this.fileira.length){
            console.log("essa cadeira nao existe!")
            return false;
        }
        return true;
    } // fun que procura minha entidade
    indexOf(id: string): number { // retorna -1 se não encontrar o cliente
        for(let i = 0; i < this.fileira.length; i++){
            let cadeira = this.fileira[i];
            if(cadeira != null && cadeira.id == id){
                return i; //se encontrar retorna o i
            }
        }
        return -1; // index of retorna a posiçao de um elemento dentro de um array
    }
    reservar(cliente: Cliente, posicao: number): boolean {
        if(!this.validarPosicao(posicao)){
            return false;
        if(posicao < 0 || posicao >= this.fileira.length){
            console.log("Essa cadeira não existe")
            return false;
        }
        if(this.fileira[posicao] != null){
            console.log("Essa cadeira está ocupada")
            return false;
        }
        if(this.indexOf(cliente.id) != -1){
            console.log("você já está reservando uma cadeira")
            return false;
        }
        this.fileira[posicao] = cliente;
        return true;
        }
    cancelar(id: string): boolean {
        let posicao = this.indexOf(id);
        if(posicao == -1) {
            this.fileira[posicao] = null; 
            return true;
        }
        return false;
    }
}
