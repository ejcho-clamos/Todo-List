import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import "../css/List.css"


const TodoList = () => {

    return (
        <div className='todo-list-line'>
            <AiOutlineCheck />
            <div>밥먹기</div>
            <label className='togglelabel' htmlFor='toggleSwitch'>
                <input type={'checkbox'} />
                <span className='toggleInner'></span>
                <span className='switch'></span>
            </label>
        </div>
    )
}

export default TodoList
