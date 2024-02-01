const chalk = require('chalk')


const nota = 7

if(nota >= 8){
    console.log(chalk.green('Parabéns! Você está aprovado'))
} else {
    console.log(chalk.bgRed.black('Você precisa fazer a prova de recuperação!'))
}

