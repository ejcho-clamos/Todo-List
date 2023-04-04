import React from 'react'
import { Navigate } from 'react-router-dom'
import TodoList from '../component/TodoList'


const PrivateMain = ({ authenticate }) => {
    return authenticate == true ? <TodoList /> : <Navigate to='/login' />
}

export default PrivateMain
