
export function TodoEdit({ todo, onUpdate, onSave }) {
    return (
        <>
        <input
            value={todo.text}
            onInput={(e) => onUpdate(todo.id, e.currentTarget.value)}
        />
        <button onClick={onSave}>Save</button>
        </>
    );
}