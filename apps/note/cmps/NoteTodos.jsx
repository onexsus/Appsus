// NoteTodos.jsx

const { useState } = React;

export function NoteTodos({ note, onNoteChange }) {
    const [newTodoText, setNewTodoText] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            txt: newTodoText,
            doneAt: null
        };
        const updatedTodos = [...note.info.todos, newTodo];
        onNoteChange({ ...note, info: { ...note.info, todos: updatedTodos } });
        setNewTodoText('');
    };

    const toggleTodoDone = (idx) => {
        const updatedTodos = note.info.todos.map((todo, index) => {
            if (idx === index) {
                return { ...todo, doneAt: todo.doneAt ? null : new Date().toISOString() };
            }
            return todo;
        });
        onNoteChange({ ...note, info: { ...note.info, todos: updatedTodos } });
    };

    const removeTodo = (idx, event) => {
        event.stopPropagation()
        const updatedTodos = note.info.todos.filter((_, index) => index !== idx);
        onNoteChange({ ...note, info: { ...note.info, todos: updatedTodos } });
    };

    return (
        <div>
            <ul>
                {note.info.todos.map((todo, idx) => (
                    <li key={idx} className={todo.doneAt ? 'done' : ''} onClick={() => toggleTodoDone(idx)}>
                        {todo.txt}
                        <button onClick={(e) => removeTodo(idx, e)}>Remove</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    placeholder="Add new todo"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}