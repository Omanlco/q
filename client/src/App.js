import React, {useState, useEffect} from 'react'
import AuthenticationService from './Services/Authentication'
import Form from './components/Form'
import Todos from './components/Todos'
import './index.css'

const App = () => {
  const [events, setEvents] = useState([])

  useEffect(()=>{
      AuthenticationService.getAllEvents()
      .then((res)=>{
          setEvents(res.data.reverse())
      }).catch((err)=>{
          console.log(err)
      })
  },[])

  const deleteEvent = (id)=>{
    console.log(id)
    AuthenticationService.deleteEvent(id)
    .then((res)=>{
       const filteredData = events.filter((data)=> data.id !== res.data.id)
       setEvents(filteredData)   
    }).catch(err=>console.log(err))
  }

  const updateEvents = (event)=>{
    setEvents(events=>[...events, event].reverse())
  }
  const getFor = (duration)=>{
    switch (duration) {
      case 'day':
        AuthenticationService.getDay()
        .then(res=> setEvents(res.data.reverse()))
        .catch(err=> console.log(err))
        break;
      
      case 'week':
        AuthenticationService.getWeek()
        .then(res=> setEvents(res.data.reverse()))
        .catch(err=> console.log(err))
        break;

      case 'month':
        AuthenticationService.getMonth()
        .then(res=> setEvents(res.data.reverse()))
        .catch(err=> console.log(err))
        break;

      default:
        break;
    }
  }
  return (
    <div className="container">
      <div className="content-wrapper">
        <Form updateEvents={updateEvents}/>
      </div>
      <div className="content-wrapper">
        <Todos deleteEvent={deleteEvent} getFor={getFor} events={events} />
      </div>
    </div>
  )
}

export default App
