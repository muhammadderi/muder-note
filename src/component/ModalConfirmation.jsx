import React from "react";
import { CiWarning } from "react-icons/ci";

function ModalConfirmation({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null; // Don't render the modal if it's not open.

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="warning-modal">
          <CiWarning size={50} />
        </span>
        <h2>{message}</h2>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmation;
