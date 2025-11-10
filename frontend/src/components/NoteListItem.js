import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Single note list item summary.
 */
export default function NoteListItem({ note }) {
  const updated = note.updatedAt ? new Date(note.updatedAt).toLocaleString() : '';
  return (
    <Link to={`/note/${note.id}`} className="list-item" aria-label={`Open note ${note.title || 'untitled'}`}>
      <div style={{ flex: 1 }}>
        <h3 className="note-title">{note.title || 'Untitled'}</h3>
        {note.body ? (
          <p className="note-body">{note.body.slice(0, 140)}{note.body.length > 140 ? '…' : ''}</p>
        ) : (
          <p className="note-body muted">No content</p>
        )}
        <div className="note-meta">Updated {updated}</div>
      </div>
    </Link>
  );
}
