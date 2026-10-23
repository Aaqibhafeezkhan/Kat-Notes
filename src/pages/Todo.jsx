import { useState, useEffect } from "preact/hooks";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase.js";
import { TodoEdit } from "../components/TodoEdit.jsx";
import { TodoView } from "../components/TodoView.jsx";
import { Card } from "../components/Card.jsx";
import { Button } from "../components/Button.jsx";
import { AddTaskModal } from "../components/AddTaskModal.jsx";
import "./Todo.css";

export function Todo() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  async function loadTodos() {
    const q = query(collection(db, "todos"), orderBy("createdAt", "asc"));
    const snapshot = await getDocs(q);

    const items = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setTodos(items);
  }

  useEffect(() => {
    loadTodos();
  }, []);

  async function addTodo(task) {
    const text = task.trim();
    if (text === "") return;

    const tempTodo = {
      id: `temp-${Date.now()}`,
      text,
      completed: false
    }

    // Display the new task temporarily
    setTodos((prev) => [...prev, tempTodo]);
    setModalIsVisible(false);
    
    // Add the task to database
    try {
      await addDoc(collection(db, "todos"), {
        text: task.trim(),
        completed: false,
        createdAt: serverTimestamp(),
      });
      await loadTodos();      
    } catch (e) {
      console.error(e);
      // Rollback if adding the task failed
      setTodos((prev) => prev.filter((t) => t.id !== tempTodo.id));
    }
  }

  return (
    <div>
      <div class="todo-nav">
        <h1>Todo List</h1>
        <div class="todo-nav-buttons">
          <Button onClick={() => setModalIsVisible(true)}>Add</Button>
          <Button onClick={() => console.log("clicked!")}>Edit</Button>
          <Button onClick={() => console.log("clicked!")}>Lists</Button>
        </div>
      </div>

      <div class="todo-list">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <Card>{todo.text}</Card>
            </li>
          ))}
        </ul>
      </div>

      <AddTaskModal
        isOpen={modalIsVisible}
        onClose={() => setModalIsVisible(false)}
        onSave={addTodo}
      />
    </div>
  );
}