import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PatientProvider } from './context/patientContext';

ReactDOM.render(
  <React.StrictMode>
    <PatientProvider>
      <App />
    </PatientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
