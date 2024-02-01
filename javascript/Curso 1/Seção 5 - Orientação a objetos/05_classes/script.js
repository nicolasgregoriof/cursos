let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function(){
        console.log("Au Au");
    }
}

let pastorAlemao = Object.create(cachorro);
pastorAlemao.latir();
pastorAlemao.raca = 'Pastor Alemao';

console.log(pastorAlemao.raca);