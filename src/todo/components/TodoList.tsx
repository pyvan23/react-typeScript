import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"


export const TodoList = () => {

    const { todoState } = useContext(TodoContext)
    const { todos } = todoState
    // console.log(todoState)
    return (

        <ul>
            <li></li>
        </ul>
    )
}
