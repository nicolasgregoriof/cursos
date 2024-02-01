const path = require("path")

//path absoluto
console.log(path.resolve('teste.txt'))

//formar path
const midFolder = 'relatorios'
const filename = "nicolas.txt"

const finalPath = path.join("/", "arquivos", midFolder, filename)
console.log(finalPath)