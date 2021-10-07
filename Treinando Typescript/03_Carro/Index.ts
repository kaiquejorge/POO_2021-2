class Carro{
    gas: number;
    gasMax: number;
    km: number;
    pass: number;
    passMax: number;

    constructor(){
        this.gas = 0;
        this.km = 0;
        this.pass = 0;
        this.passMax = 2;
        this.gasMax = 100;

    }
    drive(km: number): void {
        if(this.pass <= 0){
            console.log("Nao ha ninguem no carro");
            return;
        }
        if(this.gas <= 0){
            console.log("falha: tanque vazio")
            return;
        }
        if(this.gas < km){
            console.log("falha: tanque vazio apos andar " + this.gas + " km");
            this.km += this.gas;
            this.gas = 0;
            return;
        }   
        if(this.gas <= 0){
            console.log("falha: tanque vazio")
            return;
        }
        this.km += km;
        this.gas -= km;
    }
    fuel(gas: number): void {
        this.gas += gas
        if(this.gas + gas > this.gasMax){
            this.gas = this.gasMax;
            return;
        }

    }
    in(): void {
        if(this.pass >= this.passMax){
            console.log("falha: o limite de pessoas atingiu");
            return;
        }
        this.pass += 1;

    }
    out(): void {
        if(this.pass <= 0){
            console.log("falha: nao ha ninguem no carro");
            return;
        }
        this.pass -= 1;

    }

    toString(): string {
        return "pass: " + this.pass + ", gas: " + this.gas + ", km: " + this.km;
    }

}
let car:Carro = new Carro();
console.log(car.toString());
car.in();
car.in()
console.log(car.toString());
car.in();
console.log(car.toString());
car.out();
car.out();
car.out();
console.log(car.toString());

car.fuel(60);
console.log(car.toString());

car.drive(10);
console.log(car.toString());

car.in();
car.drive(10);
console.log(car.toString());

car.drive(70);
console.log(car.toString());
car.drive(10);
console.log(car.toString());

car.fuel(200);
console.log(car.toString());