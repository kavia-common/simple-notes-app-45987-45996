import { Storage } from './storage';

/**
 * PUBLIC_INTERFACE
 * NotesService abstracts note CRUD and persistence. Defaults to local-only mode.
 */
export class NotesService {
  constructor(storage = new Storage('notes_app_v1')) {
    this.storage = storage;
    this.collectionKey = 'notes';
    this.notes = this.storage.get(this.collectionKey) || [];
  }

  _persist() {
    this.storage.set(this.collectionKey, this.notes);
  }

  list() {
    // newest first by updatedAt
    return [...this.notes].sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  }

  get(id) {
    return this.notes.find(n => n.id === id);
  }

  create({ title, body }) {
    const now = Date.now();
    const id = `${now}-${Math.random().toString(36).slice(2, 8)}`;
    const note = {
      id,
      title: (title || '').trim(),
      body: (body || '').trim(),
      createdAt: now,
      updatedAt: now
    };
    this.notes.unshift(note);
    this._persist();
    return note;
  }

  update(id, { title, body }) {
    const idx = this.notes.findIndex(n => n.id === id);
    if (idx === -1) throw new Error('Note not found');
    const now = Date.now();
    const updated = {
      ...this.notes[idx],
      title: title !== undefined ? title.trim() : this.notes[idx].title,
      body: body !== undefined ? body.trim() : this.notes[idx].body,
      updatedAt: now
    };
    this.notes[idx] = updated;
    this._persist();
    return updated;
  }

  remove(id) {
    const idx = this.notes.findIndex(n => n.id === id);
    if (idx === -1) return;
    this.notes.splice(idx, 1);
    this._persist();
  }
}
