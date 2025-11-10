import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import NoteEditor from '../components/NoteEditor';
import ConfirmModal from '../components/ConfirmModal';

/**
 * PUBLIC_INTERFACE
 * NoteDetailPage shows an existing note for viewing and editing.
 */
export default function NoteDetailPage() {
  const { id } = useParams();
  const { getNote, updateNote, deleteNote } = useNotes();
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);

  const note = useMemo(() => getNote(id), [id, getNote]);

  if (!note) {
    return (
      <section className="card">
        <h3>Note not found</h3>
        <button className="btn" onClick={() => navigate('/')}>Back to list</button>
      </section>
    );
  }

  const onSave = async (data) => {
    await updateNote(note.id, data);
  };

  const onDelete = async () => {
    await deleteNote(note.id);
    navigate('/');
  };

  return (
    <section>
      <h2>Edit Note</h2>
      <NoteEditor
        initial={note}
        onSave={onSave}
        onCancel={() => navigate('/')}
        onDelete={() => setConfirm(true)}
      />
      {confirm && (
        <ConfirmModal
          title="Delete note?"
          message="This action cannot be undone."
          confirmText="Delete"
          cancelText="Cancel"
          onCancel={() => setConfirm(false)}
          onConfirm={onDelete}
        />
      )}
    </section>
  );
}
