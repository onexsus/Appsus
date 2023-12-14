// NotePreview.jsx


const { useState } = React;
const { useNavigate } = ReactRouterDOM

// import { useNavigate } from 'react-router-dom'; // Import useNavigate

export function NotePreview({ note, onNoteChange }) {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [editedNote, setEditedNote] = useState({ ...note, info: { ...note.info, title: note.info.title || '', txt: note.info.txt || '' }});

    const handleEdit = () => {
        setIsEditing(true);
        navigate(`/note/edit/${note.id}`); // Change URL to edit mode
    };

    const handleSave = () => {
        onNoteChange(editedNote);
        setIsEditing(false);
        navigate('/note'); // Navigate back to the notes list
    };

    const handleContentChange = (e) => {
        setEditedNote({ ...editedNote, info: { ...editedNote.info, txt: e.target.value } });
    };

    const handleTitleChange = (e) => {
        setEditedNote({ ...editedNote, info: { ...editedNote.info, title: e.target.value } });
    };

    const renderNoteContent = () => {
        switch (note.type) {
            case 'NoteTxt':
                return isEditing ? (
                    <input type="text" value={editedNote.info.txt} onChange={handleContentChange} />
                ) : (
                    <p>Note Content: {note.info.txt}</p>
                );
            case 'NoteImg':
                return (
                    <React.Fragment>
                        {isEditing ? (
                            <input type="text" value={editedNote.info.title} onChange={handleTitleChange} />
                        ) : (
                            <p>Title: {note.info.title}</p>
                        )}
                        <p>Image Url: {note.info.url}</p>
                    </React.Fragment>
                );
            default:
                return <p>Unknown note type</p>;
        }
    };

    return (
        <article className="note-preview">
            {renderNoteContent()}
            <h4>Note type: {note.type}</h4>
            <small>Note id: {note.id}</small>
            <div className="note-actions">
                {isEditing ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <React.Fragment>
                        <button disabled title="Coming soon..">Pin note</button>
                        <button disabled title="Coming soon..">Set note color</button>
                        <button disabled title="Coming soon..">Send as email</button>
                        <button onClick={handleEdit}>Edit</button>
                        <button>Remove note</button>
                    </React.Fragment>
                )}
            </div>
        </article>
    )
}