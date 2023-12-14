// NoteList.jsx


import { storageService } from '../../../services/async-storage.service.js'
import { NotePreview } from '../../note/cmps/NotePreview.jsx'

export function NoteList({ notes, onNoteChange }) {

    const onRemoveNote = (noteId) => {
        storageService.remove('notes', noteId)
            .then(() => {
                onNoteChange((prevNotes) => prevNotes.filter((note) => note.id !== noteId))
            })
            .catch((error) => {
                console.error('Error removing note from storage:', error)
            })
    }

    return (
        <div>
            <h2>Note list</h2>
            <ul className="clean-list">
                {notes.map((note) => (
                    <li key={note.id} className="note flex column align-center">
                        <NotePreview note={note} />
                        {/* ... (rest of the list item components) */}
                    </li>
                ))}
            </ul>
        </div>
    )
}
