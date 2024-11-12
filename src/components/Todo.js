import React from 'react'

export default function Todo({ todo, onToggleTodo, onDeleteTodo }) {
    return (
        <li className='todo'>
            <input type='checkbox' checked={todo.completed} onChange={() => onToggleTodo(todo.id)} />
            <span>{todo.description}</span>
            <button className='delete-todo' onClick={() => onDeleteTodo(todo.id)}>X</button>
        </li>
    )
}