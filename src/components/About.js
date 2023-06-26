import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function About(props) {
    const [MyStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor:"white"
    })
    const [btntext, setBtnText] = useState("Enable Dark Mode")
    const toggleStyle = ()=>{
       if(MyStyle.color === "black"){
            setMyStyle({
            color: "white",
            backgroundColor:"black"
            })
            setMyStyle({
            color: "white",
            backgroundColor:"black"
            })
            setBtnText("Enable Light Mode")
       }
       else{
        setMyStyle({
            color: "black",
            backgroundColor:"white"
            })
            setBtnText("Enable Dark Mode")
       }
    }
  return (
    <div className='container'style={MyStyle}>
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample" style={MyStyle}>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button class="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Overview</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={MyStyle}>
            <strong>1</strong> 
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button class="accordion-button collapsed"style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Location</strong>
        </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={MyStyle}>
            <strong>2</strong> 
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Since</strong>
        </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={MyStyle}>
            <strong>3</strong> 
        </div>
    </div>
  </div>
</div>
    <div className='container my-3'>
    <button onClick={toggleStyle} type="button" className="btn btn-dark">{btntext}</button>
    </div>
    </div>
  )
}
