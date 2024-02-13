const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto, diaSemanaTexto2;

//Método pelo if else
if(diaSemana === 0){
    diaSemanaTexto = 'Domingo';
}else if(diaSemana === 1){
    diaSemanaTexto = 'Segunda';
}else if(diaSemana === 2){
    diaSemanaTexto = 'Terça';
}else if(diaSemana === 3){
    diaSemanaTexto = 'Quarta';
}else if(diaSemana === 4){
    diaSemanaTexto = 'Quinta';
}else if(diaSemana === 5){
    diaSemanaTexto = 'Sexta';
}else if(diaSemana === 6){
    diaSemanaTexto = 'Sábado';
}else {
    diaSemanaTexto = '';
}

console.log(diaSemanaTexto);

//Método pelo switch
switch (diaSemana){
case 0: 
    diaSemanaTexto2 = 'Domingo';
    break;
case 1: 
    diaSemanaTexto2 = 'Segunda';
    break;
case 2: 
    diaSemanaTexto2 = 'Terça';
    break;
case 3: 
    diaSemanaTexto2 = 'Quarta';
    break;
case 4: 
    diaSemanaTexto2 = 'Quinta';
    break;
case 5: 
    diaSemanaTexto2 = 'Sexta';
    break;
case 6: 
    diaSemanaTexto2 = 'Sábado';
    break;
default:
    diaSemanaTexto2 = '';
}

console.log(diaSemanaTexto2);


//Também podemos fazer por função
function getDiaSemanaTexto(diasemana){
    let diaSemanaTexto2;

    switch (diaSemana){
        case 0: 
            diaSemanaTexto2 = 'Domingo';
            return diaSemanaTexto2;
        case 1: 
            diaSemanaTexto2 = 'Segunda';
            return diaSemanaTexto2;
        case 2: 
            diaSemanaTexto2 = 'Terça';
            return diaSemanaTexto2;
        case 3: 
            diaSemanaTexto2 = 'Quarta';
            return diaSemanaTexto2;
        case 4: 
            diaSemanaTexto2 = 'Quinta';
            return diaSemanaTexto2;
        case 5: 
            diaSemanaTexto2 = 'Sexta';
            return diaSemanaTexto2;
        case 6: 
            diaSemanaTexto2 = 'Sábado';
            return diaSemanaTexto2;
        default:
            diaSemanaTexto2 = '';
            return diaSemanaTexto2;
    }
}

let diaTeste = getDiaSemanaTexto(diaSemana);
console.log(diaTeste);