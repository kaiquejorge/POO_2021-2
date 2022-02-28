const readline = require('readline-sync');
let input = (): string => readline.question(); // p ler 
let write = (x : any) => process.stdout.write("" + x); // p n quebrar a linha


class Pet {
  private name: string = "";
  private alive: boolean;
  private age: number;
  private diamonds: number;
  private clean: number = 0;
  private cleanMax: number;
  private energy: number = 0;
  private energyMax: number;
  private hungry: number = 0;
  private hungryMax: number;

	constructor(energy: number, hungry: number, clean: number){
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

  public setNome(name: string) {
      if (name.length == 0) {
          this.name = "bichinho";
      } else {
          this.name = name;
      }
  }
  public getNome(): string {
      return this.name;
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

  public play(): void {
    if(!this.isAlive) {
      console.log("pet morto não brinca\n");
      
    } else if (this.alive){
      this.alive = true;
      console.log("playing\n");
      
      this.setEnergy(this.energy - 2)
      this.setHungry(this.hungry -2)
      this.setClean(this.clean -3)

      this.age++
      this.diamonds++
    }     
  }
  public eat(): void {
    if(!this.isAlive) {
        console.log("pet morto não come\n");
        return;
    }else if (this.alive){
      this.setEnergy(this.energy -1)
      this.setHungry(this.hungry +4)
      this.setClean(this.clean -2)

      this.age++ // e ai ele cresce
    }  
  }

  public shower(): void {
    if(!this.isAlive) {
      console.log("pet morto não toma banho\n");
        return;
    }else if (this.alive){
    this.setEnergy(this.getEnergy() -1);
    this.setHungry(this.getHungry() +4);
    this.setClean(this.getCleanMax());

    this.age +=1; // e ai ele cresce
    }
  }

  public sleep(): void {
    if(!this.isAlive){
      console.log("pet morto não dorme\n")
    }else if (this.energy <= this.energyMax){
      console.log("pet está memindo\n")
    this.age += 1;
    this.setEnergy(this.energyMax);
    this.setHungry(this.hungry - 1);
    }else{
      console.log("o pet não está com sono")
    }
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
    return `Energia:${this.energy}/${this.energyMax} Saciedade:${this.hungry}/${this.hungryMax} Limpeza:${this.clean}/${this.cleanMax} Diamantes:${this.diamonds} Idade:${this.age}`
  }
}

class IO {
      create_pet(): Pet {
        write("qual o nome do seu pet?")
        let name = +input()
        
        write("insira a energia máxima")
        let energyMax = +input()
    
        write("insira a saciedade máxima")
        let hungryMax = +input()
    
        write("insira o nível máximo de limpeza do seu pet")
        let cleanMax = +input()
    
        let pet: Pet = new Pet(energyMax, hungryMax, cleanMax)
        return pet
    }  
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
        let pet: Pet = this.create_pet();
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
                write("" + pet );
            } else if (words[0] == "eat") {
                pet.eat();
            } else if (words[0] == "play") {
                pet.play();
            } else if (words[0] == "shower") {
                pet.shower();
            } else if (words [0] == "sleep") {
                pet.sleep();
            } else if (words[0] == "init") {
                pet = new Pet(+words[1], +words[2], +words[3]);
            } else {
                console.log("Comando inválido");
            }
        }
    }
}

let io = new IO();
io.shell();