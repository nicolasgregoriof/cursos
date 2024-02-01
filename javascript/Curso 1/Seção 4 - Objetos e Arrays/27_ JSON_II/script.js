//Podemos converter um JSON para uma string de forma fácil
// Ou também uma string para JSON

const car = {
    "brand" : "BMW",
    "wheels" : 4,
    "doors" : 2,
    "type" : "Sedan"
}

let josonToString = JSON.stringify(car);
console.log(josonToString);

let stringToJson = JSON.parse(josonToString);
console.log(stringToJson);