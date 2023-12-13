import { noteService } from '../../note/services/note.service.js'
import { NotePreview } from "../../note/cmps/NotePreview.jsx"

const { Link } = ReactRouterDOM

export function NoteList({ notes }) {

    console.log(notes);

    // export function NoteList({ notes, onRemoveNote }) {

    const ulProps = {
        className: "note-list",
        title: 'NOTELISTTTTTTTTTTTT'
    }

    // console.log(ulProps)

    return <div>
        <h2>Note list</h2>

        <ul {...ulProps}>
            {notes.map(note =>
                <li key={note.id}>
                    <NotePreview note={note} />
                    <section>
                        <button onClick={() => onRemoveNote(note.id)}>Remove note</button>
                        <button><Link to={`/note/${note.id}`}>Details</Link></button>
                        <button><Link to={`/note/edit/${note.id}`}>Edit</Link></button>
                    </section>

                </li>
            )}

        </ul>

    </div>
}
