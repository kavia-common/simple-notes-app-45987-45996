import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteEditor from '../components/NoteEditor';
import { useNotes } from '../context/NotesContext';

/**
 * PUBLIC_INTERFACE
 * CreateNotePage renders the editor for creating a new note.
 */
export default function CreateNotePage() {
  const navigate = useNavigate();
  const { createNote } = useNotes();

  const onSave = async (data) => {
    const created = await createNote(data);
    navigate(`/note/${created.id}`);
  };

  return (
    <section>
      <h2>Create Note</h2>
      <NoteEditor onSave={onSave} onCancel={() => navigate('/')} />
    </section>
  );
}
