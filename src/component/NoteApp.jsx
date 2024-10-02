import React from 'react';
import { getAllNotes } from "../utils/local-data";
import NoteList from "./NoteList";
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +newDate(),
                        body,
                        createdAt,
                    }
                ]
            }
        })
    }


    render(){
        return (
            <div className="app-container">
            <header>
            <h1>Note-App</h1>
            </header>
            <main>
            <h2>Tambah Catatan</h2>
            <NoteInput addNote={this.onAddNoteHandler} /> 
            <h2>Daftar Catatan</h2>               
            <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </main>
        </div>
        )
    }
}

export default NoteApp;