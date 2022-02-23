let nomes: Array<string> = ["João", "Maria", "José", "Pedro", "Ana"];
nomes.sort((a, b) => -a.localeCompare(b));
console.log(nomes);