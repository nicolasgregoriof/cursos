const minimist = require('minimist')
const somaModulo = require('./soma') 
const soma = somaModulo.soma

//externo
const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

console.log(`A soma é: ${soma(a,b)}`)

