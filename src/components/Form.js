import React from 'react'
import { useState } from 'react'

export default function Form({ onAddTodo }) {
    const [todoDesc, setTodoDesc] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todoDesc) {
            const newTodo = { id: Date.now(), description: todoDesc, completed: false }
            onAddTodo(newTodo)
            setTodoDesc('')
        }
    }

    return (
        <form className='add-todo-form' onSubmit={handleSubmit}>
            <input type='text' placeholder='New task...' value={todoDesc} onChange={
                (e) => setTodoDesc(e.target.value)} />
            <button type='submit' className='add-todo-btn'>Add Task</button>
        </form>
    )
}