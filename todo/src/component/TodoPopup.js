import React from 'react'
import '../css/Modal.css'

const TodoPopup = () => {
    return (
        <div className='popup-wrap'>
            <h2>ADD TODO ITEM</h2>
            <div className='modal-content-wrap'>
                <h3>CONTENT</h3>
                <input type={'text'} />
            </div>
            <div className='modal-status-wrap'>

            </div>
            <div className='modal-btn-wrap'>
                <button className='close-btn'>CLOSE</button>
                <button className='additem-btn'>ADD ITEM</button>
            </div>
        </div>
    )
}

export default TodoPopup
