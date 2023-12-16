// NoteList.jsx


import { NotePreview } from '../../note/cmps/NotePreview.jsx';
import { storageService } from '../../../services/async-storage.service.js';

export function NoteList({ notes, onNoteChange }) {

    const handleNoteUpdate = (updatedNote) => {
        console.log("Updating note with ID:", updatedNote.id);
        storageService.put('noteDB', updatedNote).then(() => {
            // Refresh the notes list
            onNoteChange(prevNotes => prevNotes.map(note => note.id === updatedNote.id ? updatedNote : note));
        });
    };

    const onRemoveNote = (noteId) => {
        console.log("Removing note with ID:", noteId);
        storageService.remove('noteDB', noteId).then(() => {
            // Update the list after removing the note
            onNoteChange(prevNotes => prevNotes.filter(note => note.id !== noteId));
        }).catch(error => {
            console.error('Error removing note from storage:', error);
        });
    };

    return (
        <div>
            <h2>Note list</h2>
            <ul className="clean-list">
                {notes.map(note => (
                    <li key={note.id} className="note flex column align-center">
                        <NotePreview note={note} onNoteChange={handleNoteUpdate} onRemoveNote={onRemoveNote} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
