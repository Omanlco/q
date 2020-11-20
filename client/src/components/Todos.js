import React,{useState, useEffect} from 'react'
import Nav from './Nav'
import Todo from './Todo'
import AuthenticationService from '../Services/Authentication'

const Todos = ({events, getFor, deleteEvent}) => {

    
    const editEvent = (id)=>{
        console.log(id)
    }

    return (
        <div className="todos-wrapper">
            <Nav getFor={getFor} />
            {
                events.map((data, index)=>{
                    return (
                        <Todo deleteEvent={deleteEvent} editEvent={editEvent} key={index} details={data} />
                    )
                })
            }
        </div>
    )
}

export default Todos
