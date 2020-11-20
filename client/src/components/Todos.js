import React, {useState, useEffect} from 'react'
import Nav from './Nav'
import Todo from './Todo'
import AuthenticationService from '../Services/Authentication'

const Todos = ({events, getFor}) => {

   
    console.log(events)
    let reversed = [...events].reverse()

    const deleteEvent = async (id)=>{
        console.log(id)
        await AuthenticationService.deleteEvent(id)

    }
    const editEvent = (id)=>{
        console.log(id)
    }

    return (
        <div className="Todos-wrapper">
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
