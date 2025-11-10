import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

/**
 * Header with brand, New Note action and theme toggle.
 */
export default function Header({ env }) {
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const onNew = () => navigate('/new');

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" aria-label="Go to Notes list" className="brand">
          <div className="brand-badge">✦</div>
          <div className="brand-title">Simple Notes</div>
        </Link>

        <div className="header-actions">
          {location.pathname !== '/new' && (
            <button className="btn btn-primary" onClick={onNew} aria-label="Create new note">
              + New Note
            </button>
          )}
          <button className="btn btn-ghost" onClick={toggle} aria-label="Toggle theme">
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
          <Link className="btn btn-ghost" to="/_figma" aria-label="Open Figma dev preview">
            Dev Preview
          </Link>
        </div>
      </div>
      {env?.nodeEnv !== 'production' && (
        <div className="container" style={{ paddingTop: 0 }}>
          <p className="muted" style={{ fontSize: 12 }}>
            Local-only mode. API_BASE: {env?.apiBase || 'n/a'}
          </p>
        </div>
      )}
    </header>
  );
}
