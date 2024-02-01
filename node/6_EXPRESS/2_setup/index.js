const express = require('express')
const app = express()
const port = 3000 //variável de ambiente


//requisição é o que recebemos e resposta é o que enviamos pro usuário
app.get('/',(req,res) => {
    res.send('Olá mundo!!')
})

//escutando uma porta para o usuário acessar
app.listen(port,() =>{
    console.log(`App rodando na porta ${port}`)
})