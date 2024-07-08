import React from 'react';
import ReactDOM from 'react-dom/client';
import { colors } from '@primer/primitives';
import './index.css';
import App from './App.jsx';
import Temp from './Temp.jsx';


ReactDOM.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
    <Temp />
  </React.StrictMode>,
);