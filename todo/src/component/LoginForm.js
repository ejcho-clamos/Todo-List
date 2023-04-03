import React from 'react'
import "../css/Login.css"

const LoginForm = () => {
    return (
        <div className='login-wrap'>
            <h1>LOGIN</h1>
            <form className='login-form'>
                <div className='login-input-wrap'>
                    <h3>ID</h3>
                    <input type='text'
                    />
                    <span className='error-msg'>ID를 확인해 주세요.</span>
                </div>
                <button className='login-btn' >SIGN IN</button>
            </form>

        </div>
    )
}

export default LoginForm
