import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/Login.css"
import Login from "../config/Api"
import { useRecoilState } from 'recoil'
import { LoginState } from '../States/LoginState'



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
            /** 보통 데이터 호출 성공하면 200으로 표시됨(Network) */
            if (data?.message == "200") {
                navigate('/')
            } else {
                console.log('로그인 실패')
                alert('존재하지 않는 ID입니다.')
            }
        } catch {
            alert('존재하지 않는 ID입니다.')
        }
    }
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
    const token = window.location.href.split('?token=')[1];

    useEffect(() => {
        /** setItem(key, value) : 키-값 쌍을 보관한다.
         *  getItem(key) : 키에 해당하는 값을 받아온다.
         */
        if (token) localStorage.setItem('LoginState', token)
        if (userData.userId) localStorage.setItem('LoginState', userData.userId)
        if (localStorage.getItem('LoginState'))
            setIsLoggedIn(true)
        console.log(userData)
    }, [setIsLoggedIn, token, userData])

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
