// função em typescript requer nome e o tipo
function adicionar(a: number, b:number):number{
    return a+b;
}
console.log(adicionar(2,3));

// fun sao cidadãos de 1s class, podem ser armazenadas em variaveis, podem ser passadas
// com parametros e funções, colocar em listas
// abaixo uma função anonima
let adicionar1 = function (a:number, b:number):number{
    return a+b;
}
console.log(adicionar1(3,4));

// Arrow function

let adicionar2 = (a:number, b:number):number => {
    return a+b;
}
console.log(adicionar2(4,5));

let adicionar3 = (a:number, b:number):number => (a+b);
console.log(adicionar3(5,6));