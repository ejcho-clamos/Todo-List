import React from 'react'
import { GoChecklist } from 'react-icons/go'
import Logo from '../component/Logo'
import '../css/List.css'

const TodoList = () => {
    const goToPopup = () => {

    }
    return (
        <div>
            <Logo />
            <div className='todo-wrap'>
                <div className='todo-logo-wrap'>
                    <h1>TODO-LIST</h1>
                    <button onClick={goToPopup} className='todo-add-btn'>ADD</button>
                </div>
                <div className='todo-title-wrap'>
                    <GoChecklist className='title-icons' color='#fff' />
                    <span>my to-do list</span>
                </div>
                <div className='todo-list-line'>

                </div>
            </div>
        </div>
    )
}

export default TodoList
