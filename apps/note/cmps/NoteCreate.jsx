const { useState } = React;
import { noteService } from '../../note/services/note.service.js';

export function NoteCreate({ onNoteAdded }) {
    const [noteContent, setNoteContent] = useState('');
    const [noteType, setNoteType] = useState('NoteTxt'); // Default to 'NoteTxt'

    const handleSubmit = (e) => {
        e.preventDefault();
        let newNote = {
            type: noteType,
            isPinned: false,
            style: {},
            info: {}
        };

        // Set the appropriate content based on note type
        if (noteType === 'NoteTxt') {
            newNote.info.txt = noteContent;
        } else if (noteType === 'NoteImg') {
            newNote.info.url = noteContent; // Assuming 'noteContent' will have URL for images
        }
        // Other types will be handled later

        noteService.save(newNote).then(() => {
            setNoteContent('');
            // Reset other fields as needed
            onNoteAdded(); // Trigger callback to refresh the note list in the parent component
        });
    };

    const handleContentChange = (event) => {
        setNoteContent(event.target.value);
    };

    const handleTypeChange = (event) => {
        setNoteType(event.target.value);
    };

    return (
        <form className="add-note-form flex" onSubmit={handleSubmit}>
            <input
                type="text"
                value={noteContent}
                onChange={handleContentChange}
                placeholder="Enter note content"
            />

            <div>
                <input
                    type="radio"
                    id="type-text"
                    name="note-type"
                    value="NoteTxt"
                    onChange={handleTypeChange}
                    checked={noteType === 'NoteTxt'}
                />
                <label htmlFor="type-text">Text</label>
            </div>

            <div>
                <input
                    type="radio"
                    id="type-image"
                    name="note-type"
                    value="NoteImg"
                    onChange={handleTypeChange}
                    checked={noteType === 'NoteImg'}
                />
                <label htmlFor="type-image">Image</label>
            </div>

            <div>
                <input
                    type="radio"
                    id="type-video"
                    name="note-type"
                    value="NoteVideo"
                    onChange={handleTypeChange}
                    disabled={true}
                    checked={noteType === 'NoteVideo'}
                />
                <label htmlFor="type-video">Video</label>
            </div>

            <div>
                <input
                    type="radio"
                    id="type-todo"
                    name="note-type"
                    value="NoteTodo"
                    onChange={handleTypeChange}
                    disabled={true}
                    checked={noteType === 'NoteTodo'}
                />
                <label htmlFor="type-todo">Todo</label>
            </div>

            <button type="submit">Add Note</button>
        </form>
    );
}
