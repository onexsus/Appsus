// NoteList.jsx


import { NotePreview } from '../../note/cmps/NotePreview.jsx';
import { storageService } from '../../../services/async-storage.service.js';


export function NoteList({ notes, onNoteChange, onNoteUpdate }) {

    console.log('Received notes:', notes);

    // Separate the notes into pinned and unpinned
    const pinnedNotes = notes.filter(note => note.isPinned);
    const otherNotes = notes.filter(note => !note.isPinned);

    return (
        <div className="note-list">
            {/* Display pinned notes if there are any */}
            {pinnedNotes.length > 0 && (
                <React.Fragment>
                    <h2>Pinned</h2>
                    <ul className="clean-list">
                        {pinnedNotes.map(note => (
                            <li key={note.id} className="note flex column align-center">
                                <NotePreview
                                    note={note}
                                    onNoteChange={onNoteChange}
                                    onNoteUpdate={onNoteUpdate}
                                />
                            </li>
                        ))}
                    </ul>
                </React.Fragment>
            )}

            {/* Display "Others" title only if there are pinned notes */}
            {pinnedNotes.length > 0 && <h2>Others</h2>}

            <ul className="clean-list">
                {otherNotes.map(note => (
                    <li key={note.id} className="note flex column align-center">
                        <NotePreview
                            note={note}
                            onNoteChange={onNoteChange}
                            onNoteUpdate={onNoteUpdate}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
