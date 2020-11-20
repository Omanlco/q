import Api from './Api'

export default {
    getAllEvents(){
        return Api().get('api/get_todos')
    },
    getDay(){
        return Api().get('api/get_todos/day')
    },
    getWeek(){
        return Api().get('api/get_todos/week')
    },
    getMonth(){
        return Api().get('api/get_todos/month')
    },
    addEvent(credential){
        return Api().post('/api/add_todo', credential)
    },
    deleteEvent(id){
        return Api().delete(`api/delete/${id}`)
    }
}