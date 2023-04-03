import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Main from './page/Main';
import List from './page/List'
import Signup from './page/Signup';

const Wrap = () => {
    return (
        <div>

            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/todo' element={<List />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </Router>


        </div>
    )
}

export default Wrap
