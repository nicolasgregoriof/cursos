function imprimirNoConsole(){
    console.log("Olá Mundo!");
}

imprimirNoConsole();

function imprimirUmNumero(num){
    console.log("O número é: " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(12);
imprimirUmNumero(222);
imprimirUmNumero(25);

//função anonima atrelado a uma variável
const numeroAleatorio = function(){
    console.log(Math.random());
}

numeroAleatorio();