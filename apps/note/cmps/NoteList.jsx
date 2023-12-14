const { useState, useEffect } = React;

import { storageService } from '../../../services/async-storage.service.js'; // Import your storage service
import { NotePreview } from '../../note/cmps/NotePreview.jsx';

export function NoteList({ notes, onNoteChange }) {
    const onRemoveNote = (noteId) => {
        // Remove the note from storage using your service
        storageService.remove('notes', noteId)
            .then(() => {
                // Update the state to remove the deleted note
                onNoteChange((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
            })
            .catch((error) => {
                console.error('Error removing note from storage:', error);
            });
    };

    return (
        <div>
            <h2>Note list</h2>
            <ul className="clean-list">
                {notes.map((note) => (
                    <li key={note.id} className="note flex column align-center">
                        <NotePreview note={note} />
                        <section>
                            <button disabled title="Coming soon..">Pin note</button>
                            <button disabled title="Coming soon..">Set note color</button>
                            <button disabled title="Coming soon..">Send as email</button>
                            <button>Edit</button>
                            <button onClick={() => onRemoveNote(note.id)}>Remove note</button>
                        </section>
                    </li>
                ))}
            </ul>
        </div>
    );
}
