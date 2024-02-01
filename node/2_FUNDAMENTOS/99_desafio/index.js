//npm init
//npm install inquirer@8.1.2
//npm install chalk@4.1.2

const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual é o seu nome?',
    },
    {
        name: 'idade',
        message: 'Qual é a sua idade?',
    },
])
.then((answers) => {
    if (!answers.nome || !answers.idade){
        throw new Error('O nome e a idade são obrigatórios!')
    }else{

    const response = `O seu nome é ${answers.nome} e sua idade é ${answers.idade} anos`
    console.log(chalk.bgBlue(response))
    }
})
.catch(err=>console.log(err))