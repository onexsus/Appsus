import { utilService } from './util.service.js'


export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

const defaultNotes = [
    {
        id: utilService.makeId(),
        type: 'NoteTxt',
        isPinned: false,
        style: {},
        info: {
            title: 'Text Note',
            txt: 'This is a default text note'
        }
    },
    {
        id: utilService.makeId(),
        type: 'NoteImg',
        isPinned: false,
        style: {},
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
    let entities = JSON.parse(localStorage.getItem('noteDB')) || [];
    if (!entities.length) {
        defaultNotes.forEach(note => {
            note.id = note.id || _makeId();
            entities.push(note);
        });
        _save('noteDB', entities);
    }
}

function query(entityType, delay = 500) {
    initDefaultData();  // Initialize default data if needed
    var entities = JSON.parse(localStorage.getItem(entityType)) || [];
    return new Promise(resolve => setTimeout(() => resolve(entities), delay));
}

function get(entityType, entityId) {
    return query(entityType).then(entities => {
        const entity = entities.find(entity => entity.id === entityId)
        if (!entity) throw new Error(`Get failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        return entity
    })
}


function post(entityType, newEntity) {
    newEntity = { ...newEntity }
    newEntity.id = utilService.makeId() // Using makeId from utilService
    return query(entityType).then(entities => {
        entities.unshift(newEntity)
        _save(entityType, entities)
        return newEntity
    })
}

function put(entityType, updatedEntity) {
    return query(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity.id === updatedEntity.id)
        if (idx < 0) throw new Error(`Update failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    })
}

function remove(entityType, entityId) {
    return query(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity.id === entityId)
        if (idx < 0) throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        entities.splice(idx, 1)
        _save(entityType, entities)
    })
}

// Private functions

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}