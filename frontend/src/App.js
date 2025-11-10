import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NoteDetailPage from './pages/NoteDetailPage';
import CreateNotePage from './pages/CreateNotePage';
import FigmaPreviewPage from './pages/FigmaPreviewPage';
import { NotesProvider } from './context/NotesContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { getEnvConfig } from './services/config';

/**
 * Root application container that wires providers and routes.
 * Defaults to local-only mode (localStorage persistence) but reads environment variables
 * for potential future backend wiring.
 */
function AppShell() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const env = useMemo(() => getEnvConfig(), []);

  return (
    <div className="app-root">
      <Router>
        <NotesProvider>
          <Header env={env} />
          <main className="container">
            <Routes>
              <Route path="/" element={<NotesListPage />} />
              <Route path="/new" element={<CreateNotePage />} />
              <Route path="/note/:id" element={<NoteDetailPage />} />
              <Route path="/_figma" element={<FigmaPreviewPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </NotesProvider>
      </Router>
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * App entry wraps the ThemeProvider to supply theme state across the app.
 */
function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}

export default App;
