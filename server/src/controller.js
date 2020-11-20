const {Todo} = require('./models')

module.exports = {

    async addTodo(req, res){
        const upload = require('./middleware/upload')
        const calendar = require('./googleCalendarApi')
        
        try{
            await upload(req, res);
            console.log(req.file)
            let filePath = ''
            if (req.file != undefined ){
                const fileName = req.file.originalname
                filePath = __basedir + "/resources/static/assets/uploads/" + fileName
            }
            const todo = await Todo.create({
                todo: req.body.todo,
                description: req.body.description,
                venue: req.body.location,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                filePath
            })
            calendar(req)
            res.send(todo)
        } catch(err){
            console.log(err)
            res.status(500).send({
                error: 'an error occured trying to create todo'
            })
        }
    },
    
    async getAllTodos(req, res){
        try{
            const todos = await Todo.findAll({
                limit: 10
                
            }) 
            res.status(200).send(todos)

        } catch(err){
            res.status(500).send({
                error: 'an error has occured trying to fetch todos'
            })
        }
    },

    //Used Promises here
    deleteTodo(req, res){
        Todo.findOne({where: {id: req.params.id}})
        .then((todo)=> todo.destroy())
        .then(()=> res.send("Item deleted"))
        .catch(err=> res.status(500).send({
            error: "There was a problem deleting item"
        }))
    },

    async getWeek(req, res){
        const {Op} = require('sequelize')
        try{
            const sevendaysTime = new Date(new Date().setDate(new Date().getDate() + 7))
            const todo = await Todo.findAll({
                where: {
                    startDate: {
                        [Op.gt]: new Date(),
                        [Op.lt]: sevendaysTime
                        
                    }
                }
            })
            res.send(todo)
        } catch(err){
            res.status(500).send({
                error: 'There was an error fetching events for the week'
            })
        }
    },

    async getDay(req, res){
        const {Op} = require('sequelize')
        try{
            const startTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
            const endTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23,59,59)
            const todo = await Todo.findAll({
                where: {
                    startDate: {
                        [Op.gte]: startTime,
                        [Op.lte]: endTime
                        
                    }
                }
            })
            res.send(todo)
        } catch(err){
            res.status(500).send({
                error: 'There was an error fetching events for the day'
            })
        }
    },

    async getMonth(req, res){
        const {Op} = require('sequelize')
        try{
            const startMonth = new Date(new Date().getFullYear(), new Date().getMonth())
            const endMonth = new Date(new Date().getFullYear(), new Date().getMonth()+1)
            const todo = await Todo.findAll({
                where: {
                    startDate: {
                        [Op.gte]: startMonth,
                        [Op.lt]: endMonth    
                    }
                }
            })
            res.send(todo)
        } catch(err){
            res.status(500).send({
                error: 'There was an error fetching events for the month'
            })
        }
    },
}