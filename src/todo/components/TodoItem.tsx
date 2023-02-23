import { Todo } from "../interfaces/interfaces";
// import { useContext } from 'react';
// import { TodoContext } from '../context/TodoContext';
import { useTodo } from '../hooks/useTodos';

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {

    // const {toggleTodo} = useContext(TodoContext)

    const {toggleTodo} = useTodo();

    // const handleDbClick = () => {
    //     toggleTodo(todo.id);
    //     console.log('handleDbClick', todo.desc);
    // }

    return (
        <li style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : ''
        }}
            onDoubleClick={() => toggleTodo(todo.id)}>
            {todo.desc}
        </li>
    )
}