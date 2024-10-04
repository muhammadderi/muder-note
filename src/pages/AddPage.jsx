import React from 'react';
import NoteInput from '../component/NoteInput';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';

function AddPage() {

    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        addNote(note)
        navigate('/');
    }

    return (
        <section>
        <h2>Tambah Catatan</h2>
        <NoteInput addNote={onAddNoteHandler} />
        </section>
    )
}

export default AddPage;