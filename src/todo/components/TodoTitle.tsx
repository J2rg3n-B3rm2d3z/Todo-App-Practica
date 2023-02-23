import { useTodo } from '../hooks/useTodos';


export const TodoTitle = () => {

    const { pendingTodos } = useTodo();

    return (
        <h1>
            Todo:  {pendingTodos.length}
        </h1>
    )
}