let x: number = 10;
function incrementar(n: number): void{
    n += 1;
}
incrementar(x);
console.log(x);

//printará 10 pq number é primitivo, ele passará uma cópia e não outra referência