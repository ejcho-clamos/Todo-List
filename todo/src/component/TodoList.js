import React, { useState } from 'react'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import "../css/List.css"
import { Toggle } from './ToggleContainer'
import Lists from '../config/Api'



const TodoList = ({ todo }) => {

    return (
        <div className='todo-list-line'>
            <div className='todo-check-wrap'>
                {todo?.status === true ? <AiOutlineCheck color={'green'} className='check-icons' /> : <AiOutlineClose color={'red'} className='false-icons' />}

            </div>
            <div className='todo-list-title'>{todo?.content}</div>
            <div className='toggle-wrap'>
                <Toggle />
            </div>
        </div>
    )
}

export default TodoList