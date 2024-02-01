const express = require('express')
const app = express()
const port = 3000 //variável de ambiente
const path = require("path")

const basePath = path.join(__dirname, 'templates')

//requisição é o que recebemos e resposta é o que enviamos pro usuário
app.get('/users/:id',(req,res) => {
    const id = req.params.id

    //leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

app.get('/',(req,res) => {
    res.sendFile(`${basePath}/index.html`)
})

//escutando uma porta para o usuário acessar
app.listen(port,() =>{
    console.log(`App rodando na porta ${port}`)
})