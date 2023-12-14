import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote
}

function query(filterBy) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            if (filterBy && filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note => regExp.test(note.info.txt || note.info.title))
            }
            return notes
        })
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function getEmptyNote() {
    return {
        type: '',
        info: {},
        isPinned: false,
        style: {}
    }
}