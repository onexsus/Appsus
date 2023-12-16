// NoteImg.jsx

export function NoteImg({ note }) {
    console.log(note.info.url)
    return <img src={note.info.url} alt={note.info.title} />;
}