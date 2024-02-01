class Cachorro{
    constructor(raca){
        this.raca = raca;
    }
}

let labrador = new Cachorro('Labrador');
console.log(labrador.raca);

class Animal{
    constructor(raca,patas,cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let gato = new Animal('Gato',4,'Preto');
console.log(gato);