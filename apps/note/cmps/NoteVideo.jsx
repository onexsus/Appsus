// NoteVideo.jsx

export function NoteVideo({ note }) {
    return <video src={note.info.url} controls />;
}