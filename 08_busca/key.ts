let alunos = new Map<number, string>();
alunos.set(13450, 'João');
alunos.set(20000, 'Maria');
alunos.set(34203, 'Pedro');
alunos.set(40299, 'Ana'); // adicionar um novo elemento
alunos.set(59779, 'José');
alunos.set(69777, 'Paulo');

alunos.has(1657); // false // perguntar se o elemento existe ou não
alunos.has(1); // true

console.log(alunos.size);

for (let chave of alunos.keys()) { // percorrer
    console.log(chave);
}

//let keys = [...alunos.keys()].sort( (a,b) => a - b);

let valor = 59779;
if (alunos.has(valor)) {
    console.log(`O aluno ${alunos.get(valor)} possui a matrícula ${valor}`);
} else {
    console.log(`O aluno ${valor} não foi encontrado`);
}

alunos.delete(40299); // remover um elemento
console.log(alunos.size);