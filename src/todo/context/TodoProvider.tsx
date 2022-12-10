import { TodoContext } from "./TodoContext";

const INITIAL_STATE = {
    
    todoCount:2,
    todo:[],
    completed:2,
    pending:2,

}


interface props {
    children: JSX.Element | JSX.Element[]

}


export const TodoProvider = ({ children }: props) => {
    return (

        <TodoContext.Provider value={{}}>
            {children}
        </TodoContext.Provider>

    )
};
