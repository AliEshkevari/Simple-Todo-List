import React from 'react'

export default function Form() {
    return (
        <form className='add-todo-form'>
            <input type='text' placeholder='New task...' />
            <button type='submit' className='add-todo-btn'>Add</button>
        </form>
    )
}
