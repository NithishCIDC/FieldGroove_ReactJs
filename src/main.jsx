import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { Slice } from './redux/Slice.js';

createRoot(document.getElementById('root')).render(
  <ApiProvider api={Slice}>
    <App />
  </ApiProvider>
)
