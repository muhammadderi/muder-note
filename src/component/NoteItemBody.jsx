import React from 'react';
import DeleteButton from './DeleteButton';

function NoteItemBody({title, body, createdAt, id, onDelete}) {
    return (
        <div className='note-item__body'>
            <div className='note-item'>
            <div className='note-mix'>
            <h3 className='note-item__title'>{title}</h3>
            <DeleteButton id={id} onDelete={onDelete} />
            </div>
            <p className='note-item__body'>{body}</p>
            <span className='note-item__createdAt'>{createdAt}</span>
            </div>
        </div>
    )
}


export default NoteItemBody;
