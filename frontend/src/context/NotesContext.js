import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { NotesService } from '../services/NotesService';

/**
 * NotesContext provides notes state and CRUD operations to components.
 */
const NotesContext = createContext({
  notes: [],
  loading: true,
  createNote: async () => {},
  updateNote: async () => {},
  deleteNote: async () => {},
  getNote: () => undefined,
  search: '',
  setSearch: () => {}
});

export function NotesProvider({ children }) {
  const service = useMemo(() => new NotesService(), []);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const refresh = useCallback(() => {
    const all = service.list();
    setNotes(all);
  }, [service]);

  useEffect(() => {
    setLoading(true);
    refresh();
    setLoading(false);
  }, [refresh]);

  const createNote = async (data) => {
    const created = service.create(data);
    setNotes(prev => [created, ...prev]);
    return created;
  };

  const updateNote = async (id, data) => {
    const updated = service.update(id, data);
    setNotes(prev => prev.map(n => (n.id === id ? updated : n)));
    return updated;
  };

  const deleteNote = async (id) => {
    service.remove(id);
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  const getNote = (id) => {
    return service.get(id);
  };

  const value = {
    notes,
    loading,
    createNote,
    updateNote,
    deleteNote,
    getNote,
    search,
    setSearch
  };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

// PUBLIC_INTERFACE
export function useNotes() {
  /** Access notes state and CRUD operations. */
  return useContext(NotesContext);
}
