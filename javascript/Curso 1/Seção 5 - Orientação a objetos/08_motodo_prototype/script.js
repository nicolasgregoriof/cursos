function Cachorro(raca,patas,cor){
    this.raca=raca;
    this.patas=patas;
    this.cor=cor;
}

Cachorro.prototype.uivar = function(){
    console.log('Auuuuuuuuuuuuu');
}

Cachorro.prototype.latir = function(){
    console.log('au au');
}

let husky = new Cachorro('Husk',4,'cinza');

console.log(pug.raca);
husk.uivar();
husk.latir();