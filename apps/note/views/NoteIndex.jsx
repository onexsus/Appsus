// NoteIndex.jsx


const { useState, useEffect } = React
import { storageService } from '../../../services/async-storage.service.js'
import { noteService } from '../../note/services/note.service.js'
import { NoteList } from "../cmps/NoteList.jsx"
import { NoteCreate } from "../cmps/NoteCreate.jsx"

export function NoteIndex() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        noteService.initDefaultData().then(fetchNotes);
    }, []);

    const fetchNotes = () => {
        noteService.query({}).then(fetchedNotes => {
            setNotes(fetchedNotes);
        });
    };

    const handleNoteAdded = (newNote) => {
        storageService.post('noteDB', newNote).then(savedNote => {
            setNotes(prevNotes => [savedNote, ...prevNotes])
        })
    }

    return (
        <div>
            <h1>Note app</h1>
            <NoteCreate onNoteAdded={handleNoteAdded} />
            <NoteList notes={notes} onNoteChange={setNotes} />
        </div>
    )
}