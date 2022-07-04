import React from 'react'
import Transitions from '../Transition'
import "./AboutUs.css";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    let navigate = useNavigate();
  function handleClick() {
    console.log(' click');
    navigate("../heterometa");
  }

    return (
        <>
            <Transitions>
                <h2 className='mt-5 text-center' 
                    style={{ color: 'green' }}>
                    Heterometa Unity Component
                </h2>
                <button  onClick={handleClick} >Start</button>
            </Transitions>
        </>
    )
}
  
export default AboutUs