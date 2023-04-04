import React from 'react'
import '../css/Main.css'
import { useNavigate } from "react-router-dom"
import { useRecoilState } from 'recoil'
import { LoginState } from '../States/LoginState'

const MainButton = () => {
    const [token, setToken] = useRecoilState(LoginState);

    const goToLogout = () => {
        localStorage.removeItem(token)
        setToken(false)
        console.log(localStorage.removeItem(token))
    }
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    }
    const goToSignup = () => {
        navigate("/signup")
    }
    const goTodoList = () => {
        navigate('/todo')
    }
    return (
        <div className='button-wrap'>
            {token == false ? (
                <><button
                    className='tosignup-btn'
                    onClick={goToSignup}>SIGNUP</button>
                    <button
                        className='tologin-btn'
                        onClick={goToLogin}>
                        LOGIN</button></>) : (
                <><button
                    className='tosignup-btn'
                    onClick={goTodoList}>TODOLIST</button><button
                        className='tologin-btn'
                        onClick={goToLogout}>
                        LOGOUT</button></>
            )}
        </div>
    )
}

export default MainButton
