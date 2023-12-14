// NoteList.jsx //


import { storageService } from '../../../services/async-storage.service.js'
import { NotePreview } from '../../note/cmps/NotePreview.jsx'
const { useNavigate } = ReactRouterDOM

export function NoteList({ notes, onNoteChange }) {
    const navigate = useNavigate();

    const onRemoveNote = (noteId) => {
        storageService.remove('notes', noteId)
            .then(() => {
                onNoteChange((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
            })
            .catch((error) => {
                console.error('Error removing note from storage:', error);
            });
    };

    const handleNoteUpdate = (updatedNote) => {
        // Update the note in storage
        storageService.put('notes', updatedNote)
            .then(() => {
                // Refresh the notes list
                onNoteChange(prevNotes => prevNotes.map(note => note.id === updatedNote.id ? updatedNote : note));
            });
    };

    return (
        <div>
            <h2>Note list</h2>
            <ul className="clean-list">
                {notes.map((note) => (
                    <li key={note.id} className="note flex column align-center">
                        <NotePreview note={note} onNoteChange={handleNoteUpdate} />
                        {/* ... (rest of the list item components) */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
