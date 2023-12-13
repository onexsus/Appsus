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
        id: 'n101',
        type: 'NoteTxt',
        isPinned: true,
        style: { backgroundColor: '#ffadad' },
        info: {
            txt: 'Fullstack Me Baby!'
        }
    },
    {
        id: 'n102',
        type: 'NoteImg',
        isPinned: false,
        style: { backgroundColor: '#ffd6a5' },
        info: {
            title: 'Bobi and Me',
            url: 'http://some-img-url/me.jpg'
        }
    },
    {
        id: 'n103',
        type: 'NoteTodos',
        isPinned: false,
        style: { backgroundColor: '#fdffb6' },
        info: {
            title: 'Get my stuff together',
            todos: [
                { txt: 'Driving license', doneAt: null },
                { txt: 'Coding power', doneAt: 187111111 }
            ]
        }
    },
    {
        id: 'n104',
        type: 'NoteTxt',
        isPinned: false,
        style: { backgroundColor: '#caffbf' },
        info: {
            txt: 'Remember to buy milk'
        }
    },
    // Add more notes as needed
];

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
        entities.push(newEntity)
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