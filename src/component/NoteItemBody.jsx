import React from "react";
import DeleteButton from "./DeleteButton";
import ModalConfirmation from "./ModalConfirmation";
import { useState } from "react";

function NoteItemBody({ title, body, createdAt, id, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedNoteId(id);
    setIsModalOpen(true);
  };

  // Confirm delete action
  const handleConfirmDelete = () => {
    if (selectedNoteId) {
      onDelete(selectedNoteId); // Call the parent onDelete function
    }
    setIsModalOpen(false); // Close the modal
  };

  // Close the modal without deleting
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="note-item__body">
      <div className="note-item">
        <div className="note-mix">
          <h3 className="note-item__title">{title}</h3>
          <DeleteButton id={id} onDelete={handleDeleteClick} />
        </div>
        <p className="note-item__body">{body}</p>
        <span className="note-item__createdAt">{createdAt}</span>
      </div>
      <ModalConfirmation
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        message="Kamu yakin mau menghapus catatan ini?"
      />
    </div>
  );
}

export default NoteItemBody;
