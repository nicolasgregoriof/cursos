/*Função construtora*/

const data = new Date(0); /*DATA 0: Wed Dec 31 1969 21:00:00 GMT-0300 (Hora padrão de Brasília)*/
console.log(data.toString());

const tresHoras = 60 * 60 * 3 * 1000;
const data2 = new Date (0+ tresHoras);
console.log(data2.toString());

// DATA HOJE 
// O mês em Javascript começa do 0
const dataHoje = new Date();
console.log("") 
console.log("Data hoje") 
console.log(dataHoje.toString());

// Date() - a ano, m mes, d dia, h hora, M minuto,s segundo, ms milesimo de seg
console.log("") 
const dataFormato = new Date('2023-02-5 20:15:59')
console.log('Dia',dataFormato.getDate());
console.log('Mês',dataFormato.getMonth() +1); //Mês começa do 0
console.log('Ano',dataFormato.getFullYear());
console.log('Hora',dataFormato.getHours());
console.log('Min',dataFormato.getMinutes());
console.log('Seg',dataFormato.getSeconds());
console.log('ms',dataFormato.getMilliseconds());
console.log('Dia semana',dataFormato.getDay()); //0 - Domingo, 6 - Sábado

console.log("") 

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`; 
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() +1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data_nova = new Date();
const dataBrasil = formataData(data_nova);
console.log(dataBrasil)