const { useParams, useNavigate } = ReactRouterDOM;
const { useState, useEffect } = React;
import { noteService } from '../../note/services/note.service.js';

export function NoteEdit() {
    const { noteId } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState({ info: {} });

    useEffect(() => {
        noteService.get(noteId).then(fetchedNote => {
            if (fetchedNote) {
                setNote(fetchedNote);
                window.history.pushState({}, '', `/note/edit/${noteId}`);
            } else {
                setNote({ info: {} });
            }
        });
    }, [noteId]);

    const handleSave = (event) => {
        event.preventDefault();
        noteService.save(note).then(() => {
            navigate('/note');
        });
    };

    const handleChange = (event) => {
        setNote({ ...note, info: { ...note.info, txt: event.target.value } });
    };

    return (
        <div className="note-edit">
            <form onSubmit={handleSave}>
                <input
                    type="text"
                    value={note.info.txt || ''}
                    onChange={handleChange}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
