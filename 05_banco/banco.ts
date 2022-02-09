class Pessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
    public toString() {
        return this.nome;
    } //empacotamos o nome como uma pessoa
}

class Banco {
    caixas: Array<Pessoa | null>;
    espera: Array<Pessoa>;

    constructor(qtdCaixas: number) {
        this.caixas = [];
        for (let i = 0; i < qtdCaixas; i++) {
            this.caixas.push(null); // push aumenta o vetor
        }
        this.espera = [];
    }
    //coloca a pessoa na fila de espera :)
    chegarPessoa(pessoa: Pessoa): void { 
        this.espera.push(pessoa); // pega o objeto pessoa e joga na lista de espera
        // ele tira a pessoa do vetor de espera


    }
    // if o indice existe if caixa estiver vazio & tiver alguém na fila de espera
    // se o caixa estiver vazio ele pega uma pessoa da fila de espera
    // ele move a pessoa da fila pro caixa e tem q return true;
    chamarNoCaixa(indice: number): boolean { // primeiro o erro se o indice existe
        if (indice < 0 || indice >= this.caixas.length) {
            console.log("indice esta invalido")
            return false;
        if (this.caixas[indice] != null) { // segundo erro
            console.log("o caixa esta ocupado")
            return false;
        } 
        if (this.espera.length == 0) {
            console.log("a fila esta vazia");
            return false;
        }

        //let pessoa = this.espera.shift();
        this.caixas[indice] = this.espera.shift();
        return true;

    }

    // se o caixa estiver ocupado ele retira a pessoa do caixa e ela permanece na fila de espera 
    finalizarAtendimento(indice: number): Pessoa | null {
        if (indice < 0 || indice >= this.caixas.length) {
            console.log("indice esta invalido")
            return null;
        }
        if (this.caixas[indice] == null) {
            console.log("caixa vazio");
            return null;
        }
        let vaiSair = this.caixas[indice];
        this.caixas[indice] = null; //se avisa que tem alguem colocando nulo na posição e avisa q deu certo        
        return vaiSair;

    }

    removerPorNome(nome: string): Pessoa | null {
        for (let i = 0; i < this.caixas.length; i++) {
            let pessoa = this.caixas[i];
            if (pessoa != null && pessoa.nome == nome) { // se ela existe e tem esse nome
                this.caixas[i] = null;
                return pessoa;
            }

        for (let i = 0; i < this.espera.length; i++) {
            let pessoa = this.espera[i];
            if (pessoa.nome == nome) {
                this.espera.splice(i, 1);
                return pessoa;


        return null;
    
    }

    public toString() {
        let str = "caixas: | ";
        for (let i = 0; i < this.caixas.length; i++) {
            let pessoa = this.caixas[i];
            str += i + ":";
            str += pessoa !== null ? pessoa.toString : "----";
            str += " |";
        }
        str += "\nespera: ";
        for (let pessoa of this.espera) {
            str += this.espera.toString() + " ";
        }
        return str;
    }
}


let banco = new Banco(3);
console.log(""+ banco);
banco.chegarPessoa(new Pessoa("Apolo"));
console.log("" + banco);
banco.chegarPessoa(new Pessoa("Giulio"));
banco.chegarPessoa(new Pessoa("Yonara"));
banco.chamarNoCaixa(0);
banco.chamarNoCaixa(1);
banco.chamarNoCaixa(3);
banco.chamarNoCaixa(0); // é pra dar erro por já ter alguém no caixa

