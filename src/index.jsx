import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './styles/style.css';
import NoteApp from './component/NoteApp';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NoteApp />
  </BrowserRouter>
);
