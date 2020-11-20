import React from 'react'
import Nav from './Nav'
import Todo from './Todo'
import AuthenticationService from '../Services/Authentication'

const Todos = ({events, getFor}) => {

   
    console.log(events)
    let reversed = [...events].reverse()

    const deleteEvent = (id)=>{
        console.log(id)
        AuthenticationService.deleteEvent(id)
        .then((res)=>{
           let ind = reversed.findIndex((obj)=>obj.id === res.data.id)
           console.log(ind)
           if (ind > -1){
               reversed.splice(ind, 1)
           }
        }).catch(err=>console.log(err))

    }
    const editEvent = (id)=>{
        console.log(id)
    }

    return (
        <div className="todos-wrapper">
            <Nav getFor={getFor} />
            {
                reversed.map((data, index)=>{
                    return (
                        <Todo deleteEvent={deleteEvent} editEvent={editEvent} key={index} details={data} />
                    )
                })
            }
        </div>
    )
}

export default Todos
