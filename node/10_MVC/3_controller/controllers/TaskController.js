const Task = require('../models/Taks')


module.exports = class TaskController{

    static createTask(req,res){
        res.render('tasks/create')
    }
    
}

