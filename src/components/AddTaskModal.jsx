
import "./AddTaskModal.css";
import { useState } from "preact/hooks";

export function AddTaskModal({ isOpen, onClose, onSave}){
    const [task, setTask] = useState("");
    if (!isOpen) return null;

    return (
        <div className="overlay">
            <div className="modal">
                <input 
                    value={task}
                    onInput={ (e) => setTask(e.currentTarget.value)}
                    placeholder="What do u wanna do 😼"
                />
                <button onClick={() => onSave(task)}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}