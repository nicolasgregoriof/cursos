//Retorna um array a partir de outro array;
//O array retornado é determminado pelos parâmetros que são os índices de íncio e fim do novo array;

let numeros = [0,1,2,3,4,5];
console.log(numeros.slice(2,3)); //aqui ele retorna somente até o índice dois Resultado = 2 o último parâmetro para um índice antes (2,3)
console.log(numeros.slice(3)); // se não determina um índice final ele perga do índice até o final do array
console.log(numeros.slice(-3)); //pega os dos últimos para frente
console.log(numeros.slice(2,-3))// remover os último três pegando do segundo para frente