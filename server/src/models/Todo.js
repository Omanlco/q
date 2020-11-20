

module.exports = (sequelize, DataType)=>{
    const Todo = sequelize.define('Todo', {
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        todo: DataType.TEXT,
        description: DataType.TEXT,
        venue: DataType.STRING,
        completed: {
            type: DataType.BOOLEAN,
            defaultValue: false
        },
        startDate: {
            type: DataType.DATE,
            defaultValue: new Date(new Date().setDate(new Date().getDate() + 2))
        },
        endDate: {
            type: DataType.DATE,
            defaultValue: new Date(new Date().setDate(new Date().getDate() + 2))
        },
        filePath: DataType.STRING
    })
    return Todo
}