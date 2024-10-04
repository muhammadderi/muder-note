import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";
 
function DeleteButton({ id, onDelete }) {
  return <button className='note-item__delete' onClick={() => onDelete(id)}><TiDeleteOutline size={30} /></button>
}
 
export default DeleteButton;