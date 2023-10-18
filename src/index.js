import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './default.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import NoteState from './components/context/noteState';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteState>
        <App />
      </NoteState>
    </BrowserRouter>
  </React.StrictMode>
);