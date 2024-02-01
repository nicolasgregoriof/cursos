const express = require("express")
const app = express()
const exphbs = require("express-handlebars")

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars')

//################################################


app.get('/dashboards',(req,res) => {
    const items = ["Item a","Item b", "Item c"]

    res.render('dashboards',{items})
})

app.get('/post', (req,res) =>{
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.Js',
        comments: 4
    }


    res.render('blogpost',{post})
})


app.get('/blog', (req,res) => {
    const posts = [
        {
            title: "Aprender Node.js",
            category: "JavaScript",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender PHP",
            category: "PHP",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender Python",
            category: "Python",
            body: "Teste",
            comments: 4
        }
    ]

    res.render("blog",{posts})
})


app.get('/',(req,res) => {
    
    const user = {
        name: "Matheus",
        surname: "Battisti"
    }

    const palavra = 'Teste palavra'
    const auth = true
    const approved = false

    res.render('home',{user:user, palavra, auth,approved})
})




//################################################
//CONFIGURAÇÃO DO SERVIDOR
app.listen(3000, () => {
    console.log('App funcionando')
})