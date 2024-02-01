let pessoa = {
    nome: "Matheus"
}

let pessoa2 = pessoa;
console.log(pessoa == pessoa2);

pessoa2.nome = "Nicolas";
console.log(pessoa.nome);
