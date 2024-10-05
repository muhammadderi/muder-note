import NoteEmpty from "./NoteEmpty";
import NoteItemBody from "./NoteItemBody";

function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return <NoteEmpty />;
  }
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItemBody
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteList;
