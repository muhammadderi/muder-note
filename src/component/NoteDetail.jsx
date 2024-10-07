import React from 'react';
import {showFormattedDate} from "../utils/index";
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';


function NoteDetail({title, body, createdAt}) {
 const {id} = useParams();
 const note = getNote(id);

 if(!note) {
  return <p>Note not found!</p>
 }

  return (
    <div className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
      <p className="detail-page__body">{note.body}</p>
    </div>
  )
}


export default NoteDetail;