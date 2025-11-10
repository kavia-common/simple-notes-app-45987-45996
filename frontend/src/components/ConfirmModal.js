import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ConfirmModal prompts for a destructive action confirmation.
 */
export default function ConfirmModal({ title = 'Confirm', message, confirmText = 'Confirm', cancelText = 'Cancel', onConfirm, onCancel }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={title}>
      <div className="modal">
        <h3 className="modal-title">{title}</h3>
        <p>{message}</p>
        <div className="modal-actions">
          <button className="btn" onClick={onCancel}>{cancelText}</button>
          <button className="btn btn-danger" onClick={onConfirm}>{confirmText}</button>
        </div>
      </div>
    </div>
  );
}
