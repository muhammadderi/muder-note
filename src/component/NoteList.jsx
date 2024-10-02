import NoteItemBody from "./NoteItemBody";

function NoteList({notes, onDelete}) {
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItemBody key={note.id} id={note.id} onDelete={onDelete} {...note} />
                ))
            }
        </div>
    )
}

export default NoteList;