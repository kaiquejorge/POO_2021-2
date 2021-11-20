class Person {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    toString() {
        return `${this.nome} tem ${this.idade} anos`; // crase diz q a string tem que ser processada, o cifrão é onde vc coloca as variaveis
    } 
}

class Motoka{
    person: Person | null; // a barra pode dizer que sao duas possibilidades de tipo para a variavel
    potencia: number;

    constructor(potencia: number){
        this.potencia = potencia;
        this.person = null;
    }

    buzinar(): string {
        let saida = "P";
        for(let i = 0; i < this.potencia; i++)
            saida += "e";
        return saida + "m";
    }

    montar(person: Person): boolean{
        if(this.person === null){
            this.person = person;
            return true;
        }
        console.log("Motoka lotada");
        return false;
    }

    desmontar(): Person | null {
        if (this.person == null){
            return null;
        }
        const person = this.person;
        this.person = null;
        return person;

    }

    toString(){
        let nome = "vazio"
        if (this.person != null)
            nome = this.person.nome;
        return `${nome}`;	
    }
}

let motoka = new Motoka(10);
console.log(motoka.buzinar());
motoka.montar(new Person("João", 1));
motoka.desmontar();

let joao: Person | null = motoka.desmontar();
console.log("" + joao);

if(motoka.montar(new Person("Maria", 25))){
    console.log("Maria montou na motinha");
}
else
    console.log("Maria não montou na motinha");
