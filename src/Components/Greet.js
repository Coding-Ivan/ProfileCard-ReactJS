import React from 'react'
import './greet.css'


 const  Greet = props =>{
    console.log(props)
    return (
    <div className='card' >
        {/* <div>
            {props.profile}
        </div> */}
    <h1>{props.name} {props.surName}</h1>
    {props.profile}
    {props.children}
    </div>
    )
}

export default Greet;