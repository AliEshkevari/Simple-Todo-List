import React from 'react'
import Header from './Header'
import Form from './Form'
import List from './List'
import Stats from './Stats'

export default function App() {
  return (
    <div className='app'>
      <Header />
      <Form />
      <List />
      <Stats />
    </div>
  )
}