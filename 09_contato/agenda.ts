class Fone {

    constructor(private label: string, private numero: string) { 
        this.setLabel(label);
        this.setNumero(numero);
    }

    public getlabel() { // recebe o a classificação do telefone
        return this.label;
    }

    public getNumero() { // recebe o telefone da pessoa
        return this.numero;
    
    }

    public setLabel(valor: string) { // guarda
        this.label = valor;
    }

    public setNumero(valor: string) { // guarda
        this.numero = valor;
    }
    // validação do telefone
    public isValid(): boolean {
        if(Fone.validate(this.numero)) {
            return true;
        }
        return false;
    }

    
    public static validate(numero: string): boolean {
        let receber = "0123456789()-."

        for(let i = 0; i < numero.length; i++) { //esse for deve percorrer o comprimento do vetor para verificar se o numero inserido é negativo
            if(receber.indexOf(numero[i]) == -1) { // se for negativo deve retornar com o booleano de invalido
                console.log("o número é inválido!");
                return false;
            }
        }
        return true;
    }

    public toString(): string {
        return `${this.label} : ${this.numero}`;
    }

}

class Agenda {
    private contatos: Map<string, Contato> = new Map()

    constructor(contatos: Array<Contato>){
        for(let contato of contatos){
            this.addContato(contato)
        }
    }

    public setContato(contatos: Map<string, Contato>){
        this.contatos = contatos
    }

    public addContato(contato: Contato){
        if(this.contatos.has(contato.getNome())){
            this.contatos.get(contato.getNome())!.setFones(contato.getFones())
        }else{
            this.contatos.set(contato.getNome(), contato)
        }
    }
    public buscarContato(name: string): Contato | null{ // ele vai tentar encontrar no find se estiver la retorna o nome, se não retorna null
        if(this.contatos.has(name)){
            return this.contatos.get(name)!
        }else{
            console.log("não foi possível encontrar o contato")
            return null
        }
    }

    public removeContato(name: string){ // se o usuario quiser apagar o contato, ele vai verficiar se o nome existe, se sim ele apaga, se não retorna 
        if(this.contatos.has(name)){
            this.contatos.delete(name)
        }else{
            console.log("não foi possível encontrar o contato")
        }
    }

    public pesquisarContatos(pattern: string): Array<Contato>{
        let contatosOut = []

        for(let name of this.contatos.keys()){
            if(name.toString().toUpperCase().indexOf(pattern.toUpperCase()) != -1){
                contatosOut.push(this.contatos.get(name)!)
            }
        }

        return contatosOut
    }

    public toString(){
        let output: string = ""
        let contatos: Array<Contato> = []

        for(let contato of this.contatos.values()){
            contatos.push(contato)
        }
        for(let contato of contatos.sort((a, b) => a.getNome().localeCompare(b.getNome()))){
           output += `${contato}\n`
        }

        return output
    }
}



class Contato { // constructor do contato
    private nome: string;
    private fones: Array<Fone>;

    constructor(nome: string, fones: Array<Fone>) {
        this.nome = nome;
        this.fones = [];

        this.setFones(fones)
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
    public setFones(fones:Array<Fone>) {
        for(let fone of fones) {
            this.addFone(fone);
        }
    }
    public addFone(fone: Fone) {
        if(fone.isValid()){
            this.fones.push(fone);
        } else {
            console.log("erro ao add o telefone");
        }
    }

    public rmFones(index: number) { // removendo por indice
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

// adicionar contato

let contatos = [new Contato("Kaio",
                    [new Fone("Tim", "99914") , new Fone("Claro", "01020")]), // adicona um tim e um claro
                new Contato("Suzy",
                    [new Fone("Tim", "23134")]),
                new Contato("Lana",
                    [new Fone("Claro", "22235")])
                ]
 let agenda = new Agenda(contatos)
 console.log("" + agenda)

 //  remover

 let contatoRemoved = agenda.buscarContato("Kaio")
 if(contatoRemoved != null)
    contatoRemoved.rmFones(0)
console.log("" + agenda) // vai remover o telefone do Kaio sendo o Tim que tá na posição 0

// 1 - vamos adicionar mais um contato label onde já existe

agenda.addContato(new Contato("Kaio", [new Fone("Trabalho", "32333"), new Fone("Casa", "999134")]))
console.log("" + agenda)

// 2 - remove um contato real da agenda

agenda.removeContato("Lana")
console.log("" + agenda)

// 3 - usando o find ou busca

console.log(agenda.pesquisarContatos("y").join('\n') + "\n")

// 4 - add 

agenda.addContato(new Contato("Vanessa", [new Fone("Casa", "1345"), new Fone("Trabalho", "44325")]))
agenda.addContato(new Contato("Pricila", [new Fone("OI", "22231"), new Fone("Casa", "456499")]))
console.log("" + agenda)