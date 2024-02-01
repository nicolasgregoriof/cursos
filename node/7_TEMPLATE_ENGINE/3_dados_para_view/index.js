const express = require("express")
const app = express()
const exphbs = require("express-handlebars")

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

//################################################

app.get('/',(req,res) => {
    
    const user = {
        name: "Matheus",
        surname: "Battisti"
    }

    const palavra = 'Teste palavra'

    res.render('home',{user:user, palavra})
})




//################################################
//CONFIGURAÇÃO DO SERVIDOR
app.listen(3000, () => {
    console.log('App funcionando')
})