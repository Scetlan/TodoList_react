import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { App } from './App';


const reactRoot = createRoot(document.getElementById("container"));
reactRoot.render(<App />);