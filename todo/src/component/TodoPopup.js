import React, { useEffect } from 'react'
import '../css/Modal.css'
import TodoList from './TodoList'
import { Toggle } from './ToggleContainer'

const TodoPopup = ({ setModalOpen }) => {
    /** esc key로 modal 창 닫는 이벤트 추가 */
    useEffect(() => {
        const escKeyModalClose = (e) => {
            if (e.keyCode === 27) {
                closeModal();
            }
        }
        window.addEventListener("keydown", escKeyModalClose)
        return () => window.removeEventListener("keydown", escKeyModalClose)
    }, [])
    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <div className='popup-wrap modal-bg'>
            <h2>ADD TODO ITEM</h2>
            <div className='modal-content-wrap'>
                <h3>CONTENT</h3>
                <input type={'text'} />
            </div>
            <div className='modal-status-wrap'>
                <h3>STATUS</h3>
                <Toggle />
            </div>
            <div className='modal-btn-wrap'>
                <button className='close-btn' onClick={closeModal}>CLOSE</button>
                <button className='additem-btn' >ADD ITEM</button>
            </div>
        </div>
    )
}

export default TodoPopup
