import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import i18n from './i18n.js';

import Form1 from './component/Form1.jsx';


import'./App.css'
import Fetchdata from './component/Fetchdata.jsx';

import App from './App.jsx'
import State from './component/State.Jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
