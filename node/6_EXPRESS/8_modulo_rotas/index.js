const express = require('express')
const app = express()
const port = 3000 //variável de ambiente
const path = require("path")

const basePath = path.join(__dirname, 'templates')

const users = require('./users')

app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())


app.use('/users',users)


app.get('/',(req,res) => {
    res.sendFile(`${basePath}/index.html`)
})


//escutando uma porta para o usuário acessar
app.listen(port,() =>{
    console.log(`App rodando na porta ${port}`)
})


