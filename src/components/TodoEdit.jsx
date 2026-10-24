
import { useState } from "preact/hooks"

// Component to show while a todo is being edited
export function TodoEdit({ todo, onSave, onCancel }){
    const [text, setText] = useState(todo.text);

    function handleSave(){
        const trimmed = text.trim();
        if (trimmed === "") return;
        onSave(trimmed)
    }

    return (
        <div>
            <input 
                value={text}
                onInput={(e) => setText(e.currentTarget.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleSave();
                    if (e.key === "Escape") onCancel();
                }}
                autoFocus
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    )
}