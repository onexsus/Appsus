// NotePreview.jsx

import { NoteTxt } from './NoteTxt.jsx';
import { NoteImg } from './NoteImg.jsx';
import { NoteVideo } from './NoteVideo.jsx';
import { NoteTodos } from './NoteTodos.jsx';

const { useState } = React;
const { useNavigate, useLocation } = ReactRouterDOM;

export function NotePreview({ note, onNoteChange, onRemoveNote }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedNote, setEditedNote] = useState({ ...note });
    const navigate = useNavigate();
    const location = useLocation();

    const DynamicNoteComponent = {
        NoteTxt: NoteTxt,
        NoteImg: NoteImg,
        NoteVideo: NoteVideo,
        NoteTodos: NoteTodos,
    };

    const NoteComponent = DynamicNoteComponent[note.type];

    const handleEdit = () => {
        setIsEditing(true);
        navigate(`${location.pathname}?edit=${note.id}`);
    };

    const handleSave = (e) => {
        e.preventDefault();
        onNoteChange(editedNote);
        setIsEditing(false);
        navigate(location.pathname);
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
                            onChange={(e) => handleInputChange(e, 'title')}
                        />
                        <label>Content:</label>
                        <input
                            type="text"
                            value={editedNote.info.txt || ''}
                            onChange={(e) => handleInputChange(e, 'txt')}
                        />
                        <button type="submit">Save</button>
                    </div>
                </form>
            ) : (
                <div>
                    {NoteComponent ? <NoteComponent note={note} onNoteChange={onNoteChange} /> : null}
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => onRemoveNote(note.id)}>Remove</button>
                    <button disabled>Pin note</button>
                    <button disabled>Select note color</button>
                    <button disabled>Send note as email</button>
                </div>
            )}
            <small>Note type: {note.type}</small>
            <br />
            <small>Note id: {note.id}</small>
        </article>
    );
}