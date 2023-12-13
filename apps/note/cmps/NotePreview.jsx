
export function NotePreview({ note }) {
    return (
        < article className="note-preview" >
            <h3>Note id: {note.id}</h3>
            <h3>Note type: {note.type}</h3>
        </article >
    )
}

