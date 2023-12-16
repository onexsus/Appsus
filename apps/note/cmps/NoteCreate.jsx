// NoteCreate.jsx


const { useState } = React;
import { utilService } from '../../../services/util.service.js';

export function NoteCreate({ onNoteAdded }) {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const [noteType, setNoteType] = useState('NoteTxt');

    const handleSubmit = (e) => {
        e.preventDefault();
        let newNote = {
            id: utilService.makeId(),
            type: noteType,
            isPinned: false,
            style: {},
            info: { title: noteTitle }
        };

        if (noteType === 'NoteTxt') {
            newNote.info.txt = noteContent;
        } else if (noteType === 'NoteImg') {
            newNote.info.url = noteContent;
        } else if (noteType === 'NoteVideo') {
            newNote.info.url = noteContent; // YouTube video URL
        } else if (noteType === 'NoteTodos') {
            newNote.info.todos = noteContent.split(',').map(txt => ({ txt: txt.trim(), doneAt: null }));
        }

        onNoteAdded(newNote);
        setNoteTitle('');
        setNoteContent('');
    };

    const handleTitleChange = (event) => {
        setNoteTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setNoteContent(event.target.value);
    };

    const handleTypeChange = (event) => {
        setNoteType(event.target.value);
    };


    return (
        <form className="add-note-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={noteTitle}
                onChange={handleTitleChange}
                placeholder="Enter note title"
            />
            <input
                type="text"
                value={noteContent}
                onChange={handleContentChange}
                placeholder={
                    noteType === 'NoteTxt' ? "What's on your mind..." :
                    noteType === 'NoteImg' ? "Enter image URL..." :
                    noteType === 'NoteVideo' ? "Enter video URL..." :
                    "Enter comma-separated list..."
                }
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
                    checked={noteType === 'NoteVideo'}
                />
                <label htmlFor="type-video">Video</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="type-todo"
                    name="note-type"
                    value="NoteTodos"
                    onChange={handleTypeChange}
                    checked={noteType === 'NoteTodos'}
                />
                <label htmlFor="type-todo">Todo</label>
            </div>
            <button type="submit">Add Note</button>
        </form>
    );    
}
