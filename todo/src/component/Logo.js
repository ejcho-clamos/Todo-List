import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate = useNavigate();
    const logoMain = () => {
        navigate('/')
    }
    return (
        <div className='main-logo-wrap'>
            <div className='main-logo-img-wrap'>
                <img
                    onClick={logoMain}
                    className='main-logo'
                    width={500} height={150}
                    src='https://cdn.shopify.com/s/files/1/0493/7393/7831/files/Horizontal_Logo_RGB_copy_1024x1024.png?v=1614353471' />
            </div>
        </div>
    )
}

export default Logo
