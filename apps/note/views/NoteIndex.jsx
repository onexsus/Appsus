import { noteService } from '../../note/services/note.service.js'
import { NoteList } from "../../note/cmps/NoteList.jsx"


export function NoteIndex() {

const notes = noteService.notes
// console.log(notes);

    if (!notes) return <div>Loading...</div>


    return <div>
        <h1>Note app</h1>
        < NoteList notes={notes}/>
    </div>
}
