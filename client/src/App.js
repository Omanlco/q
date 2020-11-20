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
          setEvents(res.data)
      }).catch((err)=>{
          console.log(err)
      })
  },[])

  const updateEvents = (event)=>{
    setEvents(events=>[...events, event])
  }
  const getFor = (duration)=>{
    switch (duration) {
      case 'day':
        AuthenticationService.getDay()
        .then(res=> setEvents(res.data))
        .catch(err=> console.log(err))
        break;
      
      case 'week':
        AuthenticationService.getWeek()
        .then(res=> setEvents(res.data))
        .catch(err=> console.log(err))

      case 'month':
        AuthenticationService.getMonth()
        .then(res=> setEvents(res.data))
        .catch(err=> console.log(err))
          
          
    
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
        <Todos getFor={getFor} events={events} />
      </div>
    </div>
  )
}

export default App
