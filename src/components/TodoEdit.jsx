import { useEffect, useRef, useState } from "preact/hooks";

// Component to show while a todo is being edited
export function TodoEdit({ todo, onSave, onCancel }) {
  const [text, setText] = useState(todo.text);
  const editorRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (editorRef.current && !editorRef.current.contains(event.target)) {
        onCancel();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [onCancel]);

  function handleSave() {
    const trimmed = text.trim();
    if (trimmed === "") return;
    onSave(trimmed);
  }

  return (
    <div ref={editorRef}>
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
  );
}
