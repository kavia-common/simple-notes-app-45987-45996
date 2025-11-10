# Simple Notes – React Frontend

A lightweight, modern notes application following the “Ocean Professional” theme.

## Run

- npm install
- npm start

Runs at http://localhost:3000 (do not change the port).

## Routes

- `/` — Notes list with search/filter
- `/new` — Create note
- `/note/:id` — View/Edit note
- `/_figma` — Developer preview influenced by extracted Figma CSS

## Features

- Create, view, edit, delete notes
- Local persistence with `localStorage`
- Clean, responsive UI with primary `#2563EB` and secondary `#F59E0B`
- Theme toggle (light/dark)
- Modular components: Header, NoteList, NoteListItem, NoteEditor, ConfirmModal

## Environment variables (optional)

The app works without any env vars. Supported vars include:

- REACT_APP_API_BASE
- REACT_APP_BACKEND_URL
- REACT_APP_FRONTEND_URL
- REACT_APP_WS_URL
- REACT_APP_NODE_ENV
- REACT_APP_ENABLE_SOURCE_MAPS
- REACT_APP_PORT
- REACT_APP_TRUST_PROXY
- REACT_APP_LOG_LEVEL
- REACT_APP_HEALTHCHECK_PATH
- REACT_APP_FEATURE_FLAGS
- REACT_APP_EXPERIMENTS_ENABLED

Place them in a `.env` file at the project root of the frontend with the `REACT_APP_` prefix.

## Notes

- No backend calls by default; a `NotesService` with a storage abstraction uses `localStorage` for persistence.
- The dev preview pulls CSS from `public/assets` but does not replace the application’s layout.
