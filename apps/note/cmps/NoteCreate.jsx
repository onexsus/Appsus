const { useState } = React;
import { noteService } from '../../note/services/note.service.js';

export function NoteCreate({ onNoteAdded }) {
    const [noteContent, setNoteContent] = useState('');
    const [noteType, setNoteType] = useState('NoteTxt');

    const handleSubmit = (e) => {
        e.preventDefault();
        let newNote = {
            type: noteType,
            isPinned: false,
            style: {},
            info: {}
        };

        if (noteType === 'NoteTxt') {
            newNote.info.txt = noteContent;
        } else if (noteType === 'NoteImg') {
            newNote.info.url = noteContent;
        }

        noteService.save(newNote).then(() => {
            onNoteAdded(newNote); // Pass the new note to the callback
            setNoteContent('');
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
