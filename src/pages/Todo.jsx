
import { useState } from "preact/hooks";
import { TodoEdit } from "../components/TodoEdit.jsx";
import { TodoView } from "../components/TodoView.jsx";
import { Card } from "../components/Card.jsx";
import { InputField } from "../components/InputField.jsx";
import { Button } from "../components/Button.jsx";
import "./Todo.css"

export function Todo() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Make bread" },
        { id: 2, text: "Feed kat" },
        { id: 3, text: "Eat bread" },
    ]);
    const [input, setInput] = useState("");
    const [editingId, setEditingId] = useState(null);

    function addTodo() {
        if (input.trim() === "") return;
        setTodos([...todos, { id: crypto.randomUUID(), text: input }]);
        setInput("");
    }

    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function updateTodo(id, newText) {
        setTodos(
        todos.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
        ));
    }

    return (
        <div>
            <div class="todo-nav">
                <h1>Todo List</h1>
                <div class="todo-nav-buttons">
                <Button onClick={() => console.log("clicked!")}>Add</Button>
                <Button onClick={() => console.log("clicked!")}>Edit</Button>
                <Button onClick={() => console.log("clicked!")}>Lists</Button>
                </div>
            </div>
            <div class="todo-list">
                <ul>
                    {todos.map((todo, index) => (
                        <li key={todo.id}>
                        <Card>
                            Helloz
                        </Card>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}