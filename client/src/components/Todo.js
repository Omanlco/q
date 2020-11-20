import React from 'react'
import {AiOutlineDelete, AiOutlineEdit, AiOutlineEnvironment} from 'react-icons/ai'
import {BsAlarm} from 'react-icons/bs'

const Todo = ({details, deleteEvent, editEvent}) => {
    const colors = ["#fddcdf","#d9f9f5", "#dacedf"]
    //36a597=>d9f9f5  7f29a3=>dacedf  e3515e=>fddcdf

    const getColor = ()=>{
        let len = colors.length
        let randomNum = Math.floor(Math.random() * len)
        let color = colors[randomNum]
        
        return color
    }
    return (
        <div style={{backgroundColor: getColor()}} className="todo-container">
            <div className="todo-wrapper">
                <div className="upper-row">
                    <h4>{details.todo}</h4>
                    <p className="center"><BsAlarm style={{marginRight: "8px"}} />  {new Date(details.startDate).toLocaleTimeString().replace(/:\d+ /, ' ')} - {new Date(details.endDate).toLocaleTimeString().replace(/:\d+ /, ' ')} </p>
                </div>
                <p className="center"><AiOutlineEnvironment style={{marginRight: "5px"}} />  {details.venue}</p>

                <div className="bottom-row">
                    <p style={{fontStyle: "italic"}}>{details.description}</p>
                    <div className="del-edit">
                        <button onClick={()=>editEvent(details.id)} ><AiOutlineEdit /></button>
                        <button onClick={()=>deleteEvent(details.id)} ><AiOutlineDelete /></button>
                    </div>
                   
                    
                </div>
                

                
            </div>
        </div>
    )
}

export default Todo
