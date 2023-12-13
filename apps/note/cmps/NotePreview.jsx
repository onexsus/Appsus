
export function NotePreview({ note }) {
    { console.log(note) }
    return (
        < article className="note-preview" >
            <h3>Note id: {note.id}</h3>
            <h3>Note type: {note.tyle}</h3>
        </article >
    )
}