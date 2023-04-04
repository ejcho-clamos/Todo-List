import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './page/Login';
import Main from './page/Main';
import List from './page/List'
import Signup from './page/Signup';
import { RecoilRoot } from 'recoil';
import MainButton from './component/MainButton';

const Wrap = () => {
    return (
        <div>
            <BrowserRouter>
                <RecoilRoot>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/todo' element={<List />} />
                        <Route path='/signup' element={<Signup />} />
                    </Routes>

                </RecoilRoot>
            </BrowserRouter>
        </div>
    )
}

export default Wrap
