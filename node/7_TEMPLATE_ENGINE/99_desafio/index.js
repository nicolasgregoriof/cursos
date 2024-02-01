const express = require("express")
const app = express()
const exphbs = require("express-handlebars")

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars')

app.use(express.static('public'))

const products = [
    
    {
        cod: 1,
        nome: "Desodorante"
    },
    {
        cod: 2,
        nome: "Arroz"
    },
    {
        cod: 3,
        nome: "Feijão"
    },
    {
        cod: 4,
        nome: "Desinfetante"
    },
]

app.get('/', (req,res) => {
        res.render('home',{products})
    })
    

app.get('/product_i/:id', (req,res) => {    
    const product = products[req.params.id - 1]
    res.render('product_i',{product})
})

//CONFIGURAÇÃO DO SERVIDOR
app.listen(3000, () => {
    console.log('App funcionando')
})