import React, { useState } from 'react'
import "../css/Login.css"
import Login from "../config/Api"

const LoginForm = () => {
    const [userData, setUserData] = useState({
        userId: ""
    })
    const { userId } = userData;

    const checkEnter = (e) => {
        if (e.key === 'Enter') {
            if (userData.key !== userId) {
                alert("옳지 않은 ID 입니다.")
            } else {
                goToMain()
            }
        }
    }
    const goToMain = async () => {
        try {
            await Login.userLogin(userData);
        } catch {
            console.log('로그인 실패')
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
