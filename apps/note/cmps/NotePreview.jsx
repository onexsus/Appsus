// NotePreview.jsx


const { useState } = React;
const { useNavigate, useLocation } = ReactRouterDOM

// import { useNavigate } from 'react-router-dom'; // Import useNavigate

export function NotePreview({ note, onNoteChange, onRemoveNote }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedNote, setEditedNote] = useState({ ...note });
    const navigate = useNavigate();
    const location = useLocation();

    const handleEdit = () => {
        setIsEditing(true);
        navigate(`${location.pathname}?edit=${note.id}`); // Update URL with query parameter
    };

    const handleSave = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        onNoteChange(editedNote); // Update the note
        setIsEditing(false);
        navigate(location.pathname); // Revert URL
    };

    const handleInputChange = (e, field) => {
        setEditedNote({ ...editedNote, info: { ...editedNote.info, [field]: e.target.value } });
    };

    return (
        <article className="note-preview">
            {isEditing ? (
                <form onSubmit={handleSave}>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            value={editedNote.info.title || ''}
                            onChange={e => handleInputChange(e, 'title')}
                        />
                        <label>Content:</label>
                        <input
                            type="text"
                            value={editedNote.info.txt || ''}
                            onChange={e => handleInputChange(e, 'txt')}
                        />
                        <button type="submit">Save</button>
                    </div>
                </form>
            ) : (
                <div>
                    <p>Title: {note.info.title}</p>
                    <p>Content: {note.info.txt}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => onRemoveNote(note.id)}>Remove</button>
                    <button disabled>Pin note</button>
                    <button disabled>Select note color</button>
                    <button disabled>Send note as email</button>
                </div>
            )}
            <small>Note type: {note.type}</small>
            <small>Note id: {note.id}</small>
        </article>
    );
}