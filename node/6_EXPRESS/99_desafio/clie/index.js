const express = require('express')
const router = express.Router()
const path = require("path")
const basePath = path.join(__dirname, '../templates')

router.get('/add',(req,res) => {
    res.sendFile(`${basePath}/cadastro.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const cic = req.body.cic
    const address = req.body.address

    console.log(`O nome do cliente é ${name} e seu cpf é ${cic} e seu endereço é ${address}`)
    res.sendFile(`${basePath}/cadastro.html`)
})

module.exports = router