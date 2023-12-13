import { NotePreview } from "../../note/cmps/NotePreview.jsx"

const { Link } = ReactRouterDOM

export function NoteList({ notes }) {

    console.log(notes);

    return <div>
        <h2>Note list</h2>

        <div className="add-note-form">
            <label htmlFor="note-content">Note content</label>
            <input type="text" id="note-content" placeholder="What's on your mind..." />

            <select name="note-type" id="note-type">
                <option value="text">text</option>
                <option value="image">image</option>
                <option value="video">video</option>
                <option value="to-do">to-do</option>
            </select>
        </div>

        <ul className="clean-list">
            {notes.map(note =>
                <li key={note.id} className="note flex column align-center">
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
