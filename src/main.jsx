import React from 'react';
import ReactDOM from 'react-dom/client';
import { colors } from '@primer/primitives';
import App from './App.jsx';

ReactDOM.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// After rendering app, listen for color events changing
document.addEventListener('DOMContentLoaded', function() {
  const body = document.getElementById('body');
  window.addEventListener('set night', () => body.setAttribute('data-color-scheme', 'night'));
  window.addEventListener('set day', () => body.setAttribute('data-color-scheme', 'day'));
});