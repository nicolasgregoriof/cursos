const express = require('express')
const app = express()
const port = 5000 //variável de ambiente

const path = require("path")
const basePath = path.join(__dirname, 'templates')
const users = require('./clie')
const exp = require('constants')

app.use(
    express.urlencoded({
        extended:true,
    }),
)
app.use(express.json())

//arquivos estáticos, aqui que colocamos o css
app.use(express.static('public'))

//aqui usamos os arquivos para pasta users para definição de rotas
app.use('/clie',users)

app.get('/',(req,res) => {
    res.sendFile(`${basePath}/index.html`)
})

//escutando uma porta para o usuário acessar
app.listen(port,() =>{
    console.log(`App rodando na porta ${port}`)
})