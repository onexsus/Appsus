// NoteVideo.jsx

export function NoteVideo({ note }) {
    let embedUrl = note.info.url;

    if (embedUrl.includes("watch?v=")) {
        embedUrl = embedUrl.replace("watch?v=", "embed/");
    } else if (embedUrl.includes("youtu.be")) {
        embedUrl = embedUrl.replace("youtu.be", "youtube.com/embed");
    }

    return (
        <iframe
            src={embedUrl}
            title={note.info.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
}