import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/font-awesome/css/font-awesome.min.css"


// Your root element
const rootElement = document.getElementById('root');

// Create a root
const root = createRoot(rootElement);

root.render(
        <App />
        

)