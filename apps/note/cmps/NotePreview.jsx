
export function NotePreview({ note }) {

    const renderNoteContent = () => {
        switch (note.type) {
            case 'NoteTxt':
                return <p>Note Content: {note.info.txt}</p>;
            case 'NoteImg':
                return (
                    <React.Fragment>
                        <p>Title: {note.info.title}</p>
                        <p>Image Url: {note.info.url}</p>
                        {/* <img src={note.info.url} alt={note.info.title} /> */}
                    </React.Fragment>
                );
            case 'NoteTodos':
                return (
                    <React.Fragment>
                        <p>Title: {note.info.title}</p>
                        <ul>
                            {note.info.todos.map((todo, index) => (
                                <li key={index}>{todo.txt}</li> // Rendering the 'txt' property of each 'todo'
                            ))}
                        </ul>
                    </React.Fragment>
                );
            default:
                return <p>Unknown note type</p>;
        }
    };


    return (
        < article className="note-preview" >
            {renderNoteContent()}
            <h4>Note type: {note.type}</h4>
            <small>Note id: {note.id}</small>
        </article >
    )
}

