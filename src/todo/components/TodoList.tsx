import { useContext } from "react"
import { TodoContext } from '../context/TodoContext';
import { TodoItem } from "./TodoItem";
import { useTodo } from '../hooks/useTodos';

export const TodoList = () => {

    // const { todoState } = useContext(TodoContext);
    // const { todos } = todoState;

    const {todos}= useTodo();

    return (
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
    )
}