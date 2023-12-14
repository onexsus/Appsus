const { useState, useEffect } = React;
import { noteService } from '../../note/services/note.service.js';
import { NoteList } from "../../note/cmps/NoteList.jsx";
import { NoteCreate } from "../../note/cmps/NoteCreate.jsx";

export function NoteIndex() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        noteService.query({})
            .then(fetchedNotes => {
                setNotes(fetchedNotes);
            });
    }, []);

    const addNote = (newNote) => {
        setNotes(prevNotes => [...prevNotes, newNote]);
    };

    return (
        <div>
            <h1>Note app</h1>
            <NoteCreate onAddNote={addNote} />
            <NoteList notes={notes} />
        </div>
    );
}