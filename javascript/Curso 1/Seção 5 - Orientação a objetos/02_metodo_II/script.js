let pessoa = {
    nome: '',
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return this.nome;
    }
}

pessoa.setNome("Nicolas");
console.log(pessoa.nome);
console.log(pessoa.getNome());