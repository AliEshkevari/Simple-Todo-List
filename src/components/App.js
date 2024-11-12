import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Form from './Form'
import List from './List'
import Stats from './Stats'

export default function App() {
  const [todos, setTodos] = useState([])

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo])
  }

  function handleToggleTodo(todoId) {
    setTodos(todos.map((todo) => (
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )))
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => (
      todo.id !== todoId
    )))
  }

  return (
    <div className='app'>
      <Header />
      <Form onAddTodo={handleAddTodo} />
      <List todos={todos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} />
      <Stats totalTodos={todos.length} completedTodos={todos.filter((todo) => (todo.completed === true)).length} />
    </div>
  )
}