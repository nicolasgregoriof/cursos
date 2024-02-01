const express = require('express')
const app = express()
const port = 3000 //variável de ambiente
const path = require("path")

const basePath = path.join(__dirname, 'templates')

app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

//requisição é o que recebemos e resposta é o que enviamos pro usuário
app.get('/users/add',(req,res) => {
    res.sendFile(`${basePath}/useform.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuáiro é ${name} e ele tem ${age} anos`)
    res.sendFile(`${basePath}/useform.html`)
})

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


