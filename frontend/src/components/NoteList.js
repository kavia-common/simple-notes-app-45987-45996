import React, { useMemo } from 'react';
import NoteListItem from './NoteListItem';
import { useNotes } from '../context/NotesContext';

/**
 * Renders a searchable list of notes.
 */
export default function NoteList() {
  const { notes, loading, search } = useNotes();

  const filtered = useMemo(() => {
    const q = (search || '').toLowerCase();
    if (!q) return notes;
    return notes.filter(n =>
      (n.title || '').toLowerCase().includes(q) ||
      (n.body || '').toLowerCase().includes(q)
    );
  }, [notes, search]);

  if (loading) {
    return <div className="card">Loading notes…</div>;
  }

  if (!filtered.length) {
    return <div className="card">No notes found. Create your first note!</div>;
  }

  return (
    <div className="list">
      {filtered.map(note => (
        <NoteListItem key={note.id} note={note} />
      ))}
    </div>
  );
}
