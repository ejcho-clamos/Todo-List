import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/Signup.css"
import User from "../config/Api"

const SignupForm = () => {
    const [userData, setUserData] = useState({
        userId: "",
        userName: ""
    })
    const { userId, userName } = userData;

    /** enter key event 추가 */
    const toCheckEnter = (e) => {
        if (e.key === 'Enter') {
            if (userId.length <= 2 || userId.length > 9) {
                alert('ID는 3글자 이상 8글자 이하로 작성해주세요.')
            } else if (userId.key === userData.userId) {
                alert('중복된 ID 입니다.')
            } else if (userName.length <= 0) {
                alert('이름을 작성해주세요.')
            } else {
                goSignup();
            }
        }
    }
    const goSignup = async () => {
        try {
            await User.insertUser(userData);
            console.log('성공')
            alert("회원가입에 성공하였습니다.")
        } catch {
            console.log('실패')
            alert("실패");
        }
    }
    return (
        <div className='signup-wrap'>
            <h1>SIGN UP</h1>
            <div className='signup-input-wrap'>
                <h3>ID</h3>
                <input
                    type={'text'}
                    id={'userId'}
                    onKeyDown={toCheckEnter}
                    onChange={(e) => {
                        setUserData({
                            ...userData,
                            userId: e.target.value
                        })
                    }} />
            </div>
            <div className='signup-input-wrap'>
                <h3>NAME</h3>
                <input
                    type={'text'}
                    id={'userName'}
                    onKeyDown={toCheckEnter}
                    onChange={(e) => {
                        setUserData({
                            ...userData,
                            userName: e.target.value
                        })
                    }} />
            </div>
            <button className='signup-btn' onClick={goSignup}>SIGN UP</button>
        </div>
    )
}

export default SignupForm
