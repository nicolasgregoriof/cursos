const express = require("express")
const app = express()
const exphbs = require("express-handlebars")

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

//################################################


app.get('/dashboards',(req,res) => {
    res.render('dashboards')
})

app.get('/',(req,res) => {
    
    const user = {
        name: "Matheus",
        surname: "Battisti"
    }

    const palavra = 'Teste palavra'

    const auth = true

    res.render('home',{user:user, palavra, auth})
})




//################################################
//CONFIGURAÇÃO DO SERVIDOR
app.listen(3000, () => {
    console.log('App funcionando')
})