import React, {useState, useEffect} from 'react'
import Nav from './Nav'
import Todo from './Todo'
import AuthenticationService from '../Services/Authentication'

const Todos = () => {

    const [events, setEvents] = useState([])

    useEffect(()=>{
        AuthenticationService.getAllEvents()
        .then((res)=>{
            setEvents(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    console.log(events)

    const deleteEvent = (id)=>{
        console.log(id)

    }
    const editEvent = (id)=>{
        console.log(id)
    }

    return (
        <div className="Todos-wrapper">
            <Nav />
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
