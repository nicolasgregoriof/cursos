function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("ahuuuu");
    }
}

let husky = new Cachorro('Husk',4,'cinza');

husky.uivar;