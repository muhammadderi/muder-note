
import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }

    onTitleChangeHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }


    render() {
        return (
            <div className='add-new-page__input'>
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" className='add-new-page__input__title' placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeHandler} />
                <input type="text" className='add-new-page__input__body' placeholder="Detail Catatan" value={this.state.body} onChange={this.onBodyChangeHandler} />
                <button type="submit" className='submit-button'>Tambah Catatan</button>
            </form>
            </div>
        )
    }
}

export default NoteInput;