import React from 'react'

const Nav = ({getFor}) => {
    return (
        <nav>
            <div className="nav-items">
                <button onClick={()=> getFor('day')}>Events(Day)</button>
                <button onClick={()=> getFor('week')}>Events(Week)</button>
                <button onClick={()=> getFor('month')}>Events(Month)</button>
            </div>
            
        </nav>
    )
}

export default Nav
