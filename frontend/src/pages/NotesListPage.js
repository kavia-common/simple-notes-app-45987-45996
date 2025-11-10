import React from 'react';
import NoteList from '../components/NoteList';
import { useNotes } from '../context/NotesContext';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * NotesListPage shows the searchable list of notes.
 */
export default function NotesListPage() {
  const { search, setSearch, notes } = useNotes();

  return (
    <section>
      <div className="toolbar">
        <h2 style={{ margin: 0 }}>Your Notes</h2>
        <div style={{ flex: 1 }} />
        <Link to="/new" className="btn btn-primary">+ New</Link>
      </div>

      <div className="searchbar">
        <input
          className="input"
          placeholder="Search notes by title or content…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search notes"
        />
        <button className="btn" onClick={() => setSearch('')} aria-label="Clear search">Clear</button>
      </div>

      <NoteList />

      {notes.length > 0 ? (
        <p className="muted" style={{ marginTop: 12 }}>{notes.length} note(s)</p>
      ) : null}
    </section>
  );
}
