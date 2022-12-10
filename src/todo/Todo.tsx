import React from 'react'
import { TodoProvider } from './context/TodoProvider';

export const Todo = () => {
  return (
    <TodoProvider>
    <h1>Todo:</h1>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    </TodoProvider>
  )
}
