const Sequelize = require('sequelize')
const db = {}

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: './todos.sqlite'
})

const model = require('./Todo')(sequelize, Sequelize)
db[model.name] = model

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
