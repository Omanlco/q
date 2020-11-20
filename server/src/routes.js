const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/api/get_todos', controller.getAllTodos)
router.get('/api/get_todos/week', controller.getWeek)
router.get('/api/get_todos/day', controller.getDay)
router.get('/api/get_todos/month', controller.getMonth)
router.post('/api/add_todo', controller.addTodo)
router.delete('/api/delete/:id', controller.deleteTodo)

module.exports = router