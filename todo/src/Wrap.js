import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useParams } from 'react-router-dom';
import Login from './page/Login';
import Main from './page/Main';
import List from './page/List'
import Signup from './page/Signup';
import { RecoilRoot } from 'recoil';
import TodoPopup from './component/TodoPopup';


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
                        <Route path='/modal' element={<TodoPopup />} />
                    </Routes>
                </RecoilRoot>
            </BrowserRouter>
        </div>
    )
}

export default Wrap
