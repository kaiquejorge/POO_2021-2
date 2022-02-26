class Fone {

    constructor(private id: string, private telefone: string) { 
        this.id = id;
        this.telefone = telefone;
    }

    public getId() { // recebe o id da pessoa
        return this.id;
    }

    public getTelefone() { // recebe o telefone da pessoa
        return this.telefone;
    
    }

    public setId(valor: string) { // 
        this.id = valor;
    }

    public setTelefone(valor: string) {
        this.id = valor;
    }
    // validation: vamos validar
    public isValid(): boolean {
        if(Fone.validate(this.telefone)) {
            return true;
        }
        return false;
    }

    
    public static validate(Fone: string): boolean {
        let receber = "0123456789()-."

        for(let i = 0; i < Fone.length; i++) { //esse for deve percorrer o comprimento do vetor para verificar se o numero inserido é negativo
            if(receber.indexOf(Fone[i]) == -1) { // se for negativo deve retornar com o booleano de invalido
                console.log("o número é inválido!");
                return false;
            }
        }
        return true;
    }

    toString(): string {
        return `${this.id} : ${this.telefone}`;
    }

}

class Contato { // constructor do contato
    private nome: string;
    private fones: Array<Fone>;

    constructor(nome: string, fones: Array<Fone>) {
        this.nome = nome;
        this.fones = Array<Fone>();

        for (let fone of fones){
            this.addFone(fone);
        }
    }

    public getNome(): string {
        return this.nome;
    }

    public getFones() {
        return this.fones;
    }

    public setName(nome: string) {
        this.nome = nome;
    }

    public addFone(fone: Fone) {
        if(fone.isValid()){
            this.fones.push(fone);
        } else {
            console.log("erro ao add o telefone");
        }
    }

    public rmFones(index: number) { // contador q vai mostrar o indice do telefone
        if(index < this.fones.length) {
            this.fones.splice(index, 1);
        } else {
            console.log("o indice não existe");
        }
    }

    public toString(): string {
        return `${this.nome} - ${this.fones.join(",")}`; // vai printar o nome e o telefone ao lado
    }
}

let cell = [new Fone("Trabalho", "55(85)999141520")];
let kaique = new Contato("Kaique", cell);
console.log(kaique.toString())

let fone = [new Fone("Casa", "55(85)34125656")];
let mae = new Contato("Mãe", fone);
console.log(mae.toString())