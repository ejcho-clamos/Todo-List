import React from 'react'
import '../css/Main.css'
import { useNavigate } from "react-router-dom"

const MainButton = () => {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    }
    const goToSignup = () => {
        navigate("/signup")
    }
    return (
        <div className='button-wrap'>
            <button
                className='tosignup-btn'
                onClick={goToSignup}>SIGNUP</button>
            <button
                className='tologin-btn'
                onClick={goToLogin}>
                LOGIN</button>

        </div>
    )
}

export default MainButton
