class Calculator{
    battery: number;
    batteryMax: number;
    display: number;

    constructor(batteryMax: number) {
        this.battery = 0;
        this.batteryMax = this.batteryMax;
        this.display = 0.0;

    }
    chargeBattery(value: number): void {
        if(value < 0)
            return;
        this.battery += value;
        if(this.battery > this.batteryMax)
            this.battery = this.batteryMax;

    }
    useBattery(): Boolean {
        if(this.battery == 0){
            console.log("fail: bateria insuficiente")
            return false;
        }

    }
    division(): void {

    }
    function sum(a: number, b: number): number {
        if(this.useBattery())
            this.display = (sum(a + b));
            return;
    }
    toString(): string {
        return "display = " + this.display + ", battery = " + this.battery;

    }

}
let cal: Calculator = new Calculator);
console.log(cal.toString())



