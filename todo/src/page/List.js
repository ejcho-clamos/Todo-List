import React, { useState } from 'react'
import { GoChecklist } from 'react-icons/go'
import Logo from '../component/Logo'
import TodoPopup from '../component/TodoPopup'
import '../css/List.css'

const TodoList = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const goToPopup = () => {
        setModalOpen(true)
    }
    return (
        <div>
            <Logo />
            <div className='todo-wrap'>
                <div className='todo-logo-wrap'>
                    <h1>TODO-LIST</h1>
                    <button onClick={goToPopup} className='todo-add-btn'>ADD</button>
                    {modalOpen && <TodoPopup setModalOpen={setModalOpen} />}
                </div>
                <div className='todo-title-wrap'>
                    <GoChecklist className='title-icons' color='#fff' />
                    <span>MY TO-DO LIST</span>
                </div>
                <div className='todo-list-line'>

                </div>
            </div>
        </div>
    )
}

export default TodoList
