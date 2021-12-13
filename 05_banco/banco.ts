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

    public toString() {
        let str = "| ";
        for (let i = 0; i < this.caixas.length; i++) {
            let pessoa = this.caixas[i];
            str += i + ":";
            str += pessoa !== null ? pessoa : "----";
            str += " |";
        }
        str += "\n";
        for (let pessoa of this.espera) {
            str += this.espera[i].toString() + " ";
        }
        return str;
    }
}