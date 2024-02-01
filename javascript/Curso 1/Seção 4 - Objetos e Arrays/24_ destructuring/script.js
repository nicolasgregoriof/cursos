//podemos definir variáveis com propriedades do objeto com uma notação diferente, chamada destructuring

const person = {
    name: "Nicolas",
    lastname: "Figueiredo"
}

const {name: fname, lastname:lname} = person;
console.log(fname);
console.log(lname);
