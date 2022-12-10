import { TodoState, Todo } from '../interfaces/interfaces';

type TodoAction =
  | { type: "addTodo", payload: Todo }
  | { type: "toggleTodo", payload: { id: string } };

export const todoReducer = (state: TodoState, action: TodoAction) => {

};
