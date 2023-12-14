import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote
}

async function query(filterBy) {
    let notes = await storageService.query(NOTE_KEY)
    if (filterBy && filterBy.txt) {
        const regExp = new RegExp(filterBy.txt, 'i')
        notes = notes.filter(note => regExp.test(note.info.txt || note.info.title))
    }
    return notes;
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

async function save(note) {
    if (note.id) {
        await storageService.put(NOTE_KEY, note);
    } else {
        await storageService.post(NOTE_KEY, note);
    }
    return query();
}

function getEmptyNote() {
    return {
        type: '',
        info: {},
        isPinned: false,
        style: {}
    }
}
