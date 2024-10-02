import React from 'react';
import DeleteButton from './DeleteButton';

function NoteItemBody({title, body, createdAt, id, onDelete}) {
    return (
        <div className='note-item__body'>
            <div className='note-item'>
            <h3 className='note-item__title'>{title}</h3>
            <p className='note-item__body'>{body}</p>
            <span className='note-item__createdAt'>{createdAt}</span>
            <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    )
}


export default NoteItemBody;
