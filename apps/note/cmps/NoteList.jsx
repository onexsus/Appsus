import { NotePreview } from "../../note/cmps/NotePreview.jsx"

const { Link } = ReactRouterDOM

export function NoteList({ notes }) {

    console.log(notes);

    return <div>
        <h2>Note list</h2>

        <div className="add-note-form flex justify-center">
            <label htmlFor="note-content">Note content</label>
            <input type="text" id="note-content" placeholder="What's on your mind..." />

            <input type="radio" id="type-text" name="note-type" value="text" />
            <label htmlFor="type-text">Text</label>

            <input type="radio" id="type-image" name="note-type" value="image" />
            <label htmlFor="type-image">Image</label>

            <input type="radio" id="type-video" name="note-type" value="video" />
            <label htmlFor="type-video">Video</label>

            <input type="radio" id="type-todo" name="note-type" value="to-do" />
            <label htmlFor="type-todo">To-Do</label>
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
