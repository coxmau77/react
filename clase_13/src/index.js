import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';
// import reportWebVitals from './config/reportWebVitals';

import App from './components/App.js';
// Importacion del nuevo componente creado
import { NuevoComponente } from './components/NuevoComponente';

import UserCard from './components/UserCard.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = ReactDOM.createRoot(document.querySelector('body'));

// root.render(
//   <React.StrictMode>
//     <App />
//     <NuevoComponente />

//   </React.StrictMode>
// );

// reportWebVitals();

root.render(
  // fragment <
  <> 
    <UserCard name = "Pepe" surName = "Argento" age = {50}/>
  </>
  // />fragment
);