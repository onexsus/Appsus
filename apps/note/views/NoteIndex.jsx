// NoteIndex.jsx
const { useState, useEffect } = React;
import { noteService } from '../../note/services/note.service.js';
import { NoteList } from "../cmps/NoteList.jsx";
import { NoteCreate } from "../cmps/NoteCreate.jsx";

export function NoteIndex() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = () => {
        noteService.query({}).then(fetchedNotes => {
            setNotes(fetchedNotes);
        });
    };

    const handleNoteAdded = () => {
        fetchNotes();
    };

    return (
        <div>
            <h1>Note app</h1>
            <NoteCreate onNoteAdded={handleNoteAdded} />
            <NoteList notes={notes} onNoteChange={setNotes} />
        </div>
    );
}
