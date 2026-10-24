
export function TodoView({ todo, onEdit }) {
    return <div onClick={onEdit}>{todo.text}</div>
}