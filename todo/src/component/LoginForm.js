import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/Login.css"
import Login from "../config/Api"

const LoginForm = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        userId: ""
    })


    const checkEnter = (e) => {
        if (e.key === 'Enter') {
            goToMain()
        }
    }
    const goToMain = async () => {
        try {
            const data = await Login.userLogin(userData);
            if (data?.message == "200") {
                navigate('/')
            } else {
                console.log('로그인 실패')
                alert('존재하지 않는 ID입니다.')
            }

        } catch {
            console.log('로그인 실패')
            alert('존재하지 않는 ID입니다.')
        }
    }
    return (
        <div className='login-wrap'>
            <h1>LOGIN</h1>
            <div className='login-input-wrap'>
                <h3>ID</h3>
                <input type='text' onKeyDown={checkEnter}
                    onChange={(e) => {
                        setUserData({
                            ...userData,
                            userId: e.target.value
                        })
                    }}
                />
            </div>
            <button className='login-btn' onClick={goToMain} >SIGN IN</button>


        </div>
    )
}

export default LoginForm
