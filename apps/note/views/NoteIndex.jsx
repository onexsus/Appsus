const { useState, useEffect } = React
import { noteService } from '../../note/services/note.service.js'
import { NoteList } from "../../note/cmps/NoteList.jsx"

export function NoteIndex() {
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        noteService.query({}) // Assuming query function takes a filter object
            .then(fetchedNotes => {
                setNotes(fetchedNotes);
            });
    }, []);

    if (!notes) return <div>Loading...</div>;

    return (
        <div>
            <h1>Note app</h1>
            <NoteList notes={notes} />
        </div>
    );
}