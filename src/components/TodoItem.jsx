import { TodoEdit } from "./TodoEdit";
import { TodoView } from "./TodoView";

// Component to display todo item, input if being edited, TodoView otherwise
export function TodoItem({ todo, isEditing, onEdit, onSave, onCancel }) {
    if (isEditing) 
        return <TodoEdit 
            todo={todo} 
            onSave={onSave}
            onCancel={onCancel}
        />
    else return <TodoView todo={todo} onEdit={onEdit}/>
}