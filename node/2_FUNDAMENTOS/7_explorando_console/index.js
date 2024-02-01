const x = 10
const y = 'Nicolas'
const z = [1,2]

console.log(x,y,z)

//Contagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

//Variável entre string
console.log('O nome é %s, ele é programador',y)

//Limpar console

setTimeout(() => {
    console.clear()
},2000)