import { utilService } from '../../../services/util.service.js';
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'

const defaultNotes = [
    {
        id: utilService.makeId(),
        type: 'NoteTxt',
        isPinned: false,
        style: { backgroundColor: '#00d' },
        info: {
            title: 'Text Note',
            txt: 'This is a default text note'
        }
    },
    {
        id: utilService.makeId(),
        type: 'NoteImg',
        isPinned: false,
        style: {
            backgroundColor: '#00d'
        },
        info: {
            title: 'Image Note',
            url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'
        }
    },
    {
        id: utilService.makeId(),
        type: 'NoteVideo',
        isPinned: false,
        style: {},
        info: {
            title: 'Video Note',
            url: 'https://www.youtube.com/watch?v=RXj8Eq5h7hE'
        }
    },
    {
        id: utilService.makeId(),
        type: 'NoteTodos',
        isPinned: false,
        style: {},
        info: {
            title: 'Todo Note',
            todos: [
                { txt: 'First task', doneAt: null },
                { txt: 'Second task', doneAt: null }
            ]
        }
    }
]

function initDefaultData() {
    return storageService.query(NOTE_KEY).then(notes => {
        if (notes.length) return notes; // If notes already exist, return them

        // Function to add notes sequentially
        function addNoteSequentially(index) {
            if (index >= defaultNotes.length) {
                return Promise.resolve(); // Resolve when all notes are added
            }

            let note = { ...defaultNotes[index], id: utilService.makeId() };
            return storageService.post(NOTE_KEY, note).then(() => {
                return addNoteSequentially(index + 1); // Add the next note
            });
        }

        // Start adding notes from the first one
        return addNoteSequentially(0).then(() => {
            return storageService.query(NOTE_KEY); // Return the updated list of notes
        });
    });
}

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    initDefaultData,
}



function query(filterBy) {
    return storageService.query(NOTE_KEY).then(notes => {
        if (!notes.length) return initDefaultData()
        if (filterBy && filterBy.txt) {
            const regExp = new RegExp(filterBy.txt, 'i');
            return notes.filter(note => regExp.test(note.info.txt || note.info.title));
        }
        return notes;
    });
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId);
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId);
}

function save(note) {
    const action = note.id ? storageService.put(NOTE_KEY, note) : storageService.post(NOTE_KEY, note);
    return action.then(() => query()).then(notes => {
        // Sort notes to bring pinned notes to the top
        return notes.sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));
    });
}

function getEmptyNote() {
    return {
        type: '',
        info: {},
        isPinned: false,
        style: {}
    };
}