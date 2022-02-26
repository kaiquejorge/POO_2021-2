const readline = require('readline-sync');
let input = (): string => readline.question(); // p ler 
let write = (x : any) => process.stdout.write("" + x); // p n quebrar a linha

class Pet {
  private nome: string = "";
  private alive: boolean;
  private age: number;
  private diamonds: number;
  private clean: number = 0;
  private cleanMax: number;
  private energy: number = 0;
  private energyMax: number;
  private hungry: number = 0;
  private hungryMax: number;

	constructor(nome: string, energy: number, hungry: number, clean: number){
	this.setNome(nome)
    this.setEnergy(energy)
    this.setHungry(hungry)
    this.setClean(clean)
    
    this.age = 0;
    this.alive = true;
    this.diamonds = 0;
    this.energyMax = energy;
    this.hungryMax = hungry;
    this.cleanMax = clean;
	}

  public setNome(nome: string) {
      if (nome.length == 0) {
          this.nome = "bichinho";
      } else {
          this.nome = nome;
      }
  }
  public getNome(): string {
      return this.nome;
  }
  public getAge(): number{
      return this.age;
  }
  public getAlive(): boolean {
      return this.alive;
  }
  public getDiamonds(): number {
      return this.diamonds;
  }
  public getCleanMax(): number {  
     return this.cleanMax;   
  }
  public getEnergy(): number {
      return this.energy;
  }
  public getHungry(): number {
      return this.hungry;
  }
  public getHungryMax(): number {
      return this.hungryMax;
  }
  
  public setClean(value: number) {
    if (value <= 0){
      this.clean = 0;
      this.alive = false;
        console.log("seu pet morreu por não tomar banho!")
    } else if 
      (value >= this.cleanMax){
      this.clean = this.cleanMax;
    } else {
         this.clean = value;
    }
  }
  public setEnergy(value: number) {
    if (value <= 0){
      this.energy = 0;
      this.alive = false;
      console.log("seu pet morreu de fraqueza!")
    } else if
      (value >= this.energyMax){
      this.energy = this.energyMax;
    } else {
        this.energy = value;  
    }
  }
      
  public setHungry(value: number) {
    if (value <= 0){
      this.hungry = 0;
      this.alive = false;
      console.log("seu pet morreu de fome!")
    } else if
      (value >= this.hungryMax){
      this.hungry = this.hungryMax;
    } else {
        this.hungry = value;  
    }
  }

  brincar(): void {
    if(!this.isAlive) {
      console.log("pet morto não brinca\n");
      
    } else if (this.isAlive){
      console.log("playing\n");
      
      this.setEnergy(this.energy - 2)
      this.setHungry(this.hungry -2)
      this.setClean(this.clean -3)

      this.age++
      this.diamonds++
    }     
  }
  comer(): void {
      if(!this.isAlive) {
          console.log("pet morto não come\n");
          return;
      }else if (this.isAlive){
        this.setEnergy(this.energy -1)
        this.setHungry(this.hungry +4)
        this.setClean(this.clean -2)

        this.age++ // e ai ele cresce
  }
  shower(): void {
       if(!this.isAlive) {
          console.log("pet morto não toma banho\n");
          return;
      }else if (this.isAlive){
        this.setEnergy(this.energy -1)
        this.setHungry(this.hungry +4)
        this.setClean(this.clean -2)

        this.age++ // e ai ele cresce
}
  public sleep(): void {
      
  }
  public energy(): void {
      
  }
  
  public isAlive():boolean {
    if(this.alive){
        return true
    }else{
        console.log("Seu pet está morto. R.I.P")
        return false
    }
  }

  toString():string{
    return `E:${this.energy}/${this.energyMax} S:${this.hungry}/${this.hungryMax} L:${this.clean}/${this.cleanMax} D:${this.diamonds} I:${this.age}`
  }
}

class IO {
    mostrar_help() {
        write("Comandos:\n");
        write("  init <nome> <energyMax> <cleanMax>: cria um novo pet\n");
        write("  show: mostra o pet\n");
        write("  play: faz o pet brincar\n");
        write("  eat: faz o pet comer\n");
        write("  end: sai do programa\n");
        write("  powered by kaique\n");
    }

    shell() {
        let pet: Pet = create_pet();
        this.mostrar_help();
        while (true) {
            write("$ ");
            let line = input();
            let words = line.split(" ");
            if (words[0] == "end") {
                break;
            } else if (words[0] == "help") {
                this.mostrar_help();
            } else if (words[0] == "show") {
                write("" + pet "\n");
            } else if (words[0] == "eat") {
                pet.eat();
            } else if (words[0] == "play") {
                pet.play();
            } else if (words[0] == "shower") {
                pet.shower();
            } else if (words [0] == "sleep") {
                pet.sleep();
            } else if (words[0] == "init") {
                pet = new Pet(+words[1], +words[2], +words[3], +words[4]);
            } else {
                console.log("Comando inválido");
            }
        }
    }
}

let io = new IO();
io.shell();
