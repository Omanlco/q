import React from 'react'
import Form from './components/Form'
import Todos from './components/Todos'
import './index.css'

const App = () => {
  return (
    <div className="container">
      <div className="content-wrapper">
        <Form />
      </div>
      <div className="content-wrapper">
        <Todos />
      </div>
    </div>
  )
}

export default App
