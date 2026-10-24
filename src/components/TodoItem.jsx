import { TodoEdit } from "./TodoEdit";
import { TodoView } from "./TodoView";

export function TodoItem({ todo, isEditing, onEdit, onSave, onCancel }) {
    if (isEditing) 
        return <TodoEdit 
            todo={todo} 
            onSave={onSave}
            onCancel={onCancel}
        />
    else return <TodoView todo={todo} onEdit={onEdit}/>
}