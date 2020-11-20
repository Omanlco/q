import React, {useState} from 'react'
import AuthenticationService from '../Services/Authentication'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const Form = ({updateEvents}) => {
    const [state, setState] = useState({
        todo: "",
        description: "",
        location: "",
        email:"",
        startDate: "",
        endDate: "",
        file: null,


    })


    const handlechange = (e)=>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleStartDate = (date)=>{
        setState({
            ...state,
            startDate: date
        })
    }

    const handleEndDate = (date)=>{
        setState({
            ...state,
            endDate: date
        })
    }
    const handleFile = (e)=>{
        setState({
            ...state,
            file: e.target.files[0]
        })
        
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        const {todo, description, location, email, startDate, endDate, file} = state
        let data = new FormData()
        data.append('todo', todo)
        data.append('description', description)
        data.append('location', location)
        data.append('email', email)
        data.append('startDate', startDate)
        data.append('endDate', endDate)
        data.append('file', file)
        
        AuthenticationService.addEvent(data)
        .then(res=>{
            updateEvents(res.data)
        }).catch(err=>console.log(err))
    }
    return (
        <div className="form-container">
            <form id="myForm" onSubmit={handleSubmit}>
                <h2 style={{textAlign: "center"}}>Add an Event</h2>
                <div className="input-wrapper" >
                    <input type='text' name='todo' onChange={handlechange} placeholder='Add Event' />
                </div>

                <div className="input-wrapper" >
                    <input type='text' name='description' onChange={handlechange}  placeholder='Add Description' />
                </div>

                <div className="input-wrapper" >
                    <input type='text' name='location' onChange={handlechange}  placeholder='Add location' />
                </div>

                <div className="input-wrapper" >
                    <input type='email' name='email' onChange={handlechange}  placeholder='Optional* Add email to send invite to' />
                </div>

                <div className="input-wrapper">
                    <DatePicker mode="date"  onChange={handleStartDate}  dateFormat="MM/dd/yy" placeholderText="start date"/>
                </div>

                <div className="input-wrapper">
                    <DatePicker mode="date"  onChange={handleEndDate}   dateFormat="MM/dd/yy" placeholderText="end date"/>
                </div>

                <div className="input-wrapper" >
                    <input type='file' name='file' onChange={handleFile} />
                </div>

                <div className="input-wrapper" >
                    <input type='submit' placeholder='Submit' />
                </div>

            </form>    
        </div>
    )
}

export default Form
