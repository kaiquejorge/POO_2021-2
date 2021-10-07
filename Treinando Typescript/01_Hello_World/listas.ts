// em javascript
let l = [1,2,3];
console.log(l);

// em typescript
let l1:number[] = [2,3,4];
console.log(l1);

let l2:string[] = ["Jesus, Maria, José"]
console.log(l2);

// iteração em javascript

console.log(l1.length);
for(let i=0; i<l1.length; i++){
    console.log(i,l1[i])
}
// for in (para qnd precisarmos dos valores dos índices + lista)
for(let i in l1){
    console.log(i,l1[i]);
}
// for of = para qnd precisarmos dos valores de l1 (lista) //i p contador e índice, caso contrário use x
//for in ou for of não se pode tipar com :number ou :string

for(let elemento of l1){
    console.log(elemento);
}

//operação sobre listas 

let lista:number[] = [10,20,30,40]
lista.push(50); // push para inserir elementos
console.log(lista);

// removendo elementos da lista
lista.splice(2, 3);
console.log(lista);
