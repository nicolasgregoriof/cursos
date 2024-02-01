let pessoa = {
    maos : 2
}

let pessoaNova = Object.create(pessoa);
console.log(pessoaNova.maos);
console.log(pessoaNova.hasOwnProperty('maos'));
console.log(Object.getPrototypeOf(pessoaNova)==pessoa);