
export function TodoView({ todo, index, onEdit, onDelete }) {
    return (
        <>
        {index + 1}. {todo.text}
        <button onClick={() => onEdit(todo.id)}>Edit</button>
        <button onClick={() => onDelete(todo.id)}>✕</button>
        </>
    );
}
