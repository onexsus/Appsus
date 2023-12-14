import { NotePreview } from "../../note/cmps/NotePreview.jsx";
import { noteService } from '../../note/services/note.service.js'; // Ensure correct path
const { Link, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

export function NoteList() {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = () => {
        noteService.query({}).then(fetchedNotes => {
            setNotes(fetchedNotes);
        });
    };

    const onRemoveNote = (noteId) => {
        noteService.remove(noteId).then(() => {
            setNotes(notes.filter(note => note.id !== noteId));
        });
    };

    return (
        <div>
            <h2>Note list</h2>
            <ul className="clean-list">
                {notes.map(note => (
                    <li key={note.id} className="note flex column align-center">
                        <NotePreview note={note} />
                        <section>
                            <button disabled title="Coming soon..">Pin note</button>
                            <button disabled title="Coming soon..">Set note color</button>
                            <button disabled title="Coming soon..">Send as email</button>
                            <button onClick={() => navigate(`/note/edit/${note.id}`)}>Edit</button>
                            <button onClick={() => onRemoveNote(note.id)}>Remove note</button>
                        </section>
                    </li>
                ))}
            </ul>
        </div>
    )
}
