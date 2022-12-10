import { Todo } from "../interfaces/interfaces"
import { useContext } from 'react';
import { TodoContext } from "../context/TodoContext";

interface props {
  todo: Todo
}

export const TodoItem = ({ todo }: props) => {

  const { toggleTodo } =  useContext(TodoContext)

  const onHandleDoubleClick = () => {
    toggleTodo(todo.id)
  }
  return (
    <li style={{
      cursor: 'pointer',
      textDecoration: todo.completed ? 'line-through' : ''
    }} onDoubleClick={onHandleDoubleClick} >
      {todo.desc}
    </li>
  )
}
