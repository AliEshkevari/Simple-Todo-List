import React from 'react'
import Todo from './Todo'

export default function List({ todos, onToggleTodo, onDeleteTodo }) {
    return (
        <ul className='todo-list'>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} />
            )
            )}
        </ul>
    )
}