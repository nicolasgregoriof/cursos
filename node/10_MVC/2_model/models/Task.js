const {DataTypes} = require('sequelize')
const db = require('../db/conn')


//Aqui estamos criando a tabela no banco de dados
const Task = db.define('Task',{
    title:{
        type: DataTypes.STRING,
        require: true
    },
    description:{
        type: DataTypes.STRING,
        require: true
    },
    done:{
        type: DataTypes.BOOLEAN,
        require: true
    },

})

module.exports = Task