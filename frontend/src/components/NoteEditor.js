import React, { useEffect, useMemo, useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * NoteEditor renders a form for creating/editing a note with validation.
 */
export default function NoteEditor({ initial = { title: '', body: '' }, onSave, onCancel, onDelete }) {
  const [title, setTitle] = useState(initial.title || '');
  const [body, setBody] = useState(initial.body || '');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTitle(initial.title || '');
    setBody(initial.body || '');
  }, [initial.title, initial.body]);

  const validate = () => {
    const e = {};
    if (!title.trim()) e.title = 'Title is required';
    if (body.length > 5000) e.body = 'Body is too long';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const canSave = useMemo(() => title.trim().length > 0, [title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave({ title: title.trim(), body: body.trim() });
  };

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      <div className="toolbar">
        <button type="button" className="btn" onClick={onCancel} aria-label="Cancel editing">Cancel</button>
        <div style={{ flex: 1 }} />
        {onDelete && (
          <button type="button" className="btn btn-danger" onClick={onDelete} aria-label="Delete note">
            Delete
          </button>
        )}
        <button type="submit" className="btn btn-primary" disabled={!canSave} aria-label="Save note">
          Save
        </button>
      </div>

      <div style={{ display: 'grid', gap: 12 }}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="input"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <div className="muted" style={{ color: 'var(--color-error)' }}>{errors.title}</div>}
        </div>

        <div>
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            className="textarea"
            placeholder="Write your note…"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          {errors.body && <div className="muted" style={{ color: 'var(--color-error)' }}>{errors.body}</div>}
        </div>
      </div>
    </form>
  );
}
