import { useEffect, useState } from 'react';
import './App.css';
import ExistingPatientForm from './components/ExistingPatientForm';
import Header from './components/Header';
import NewPatientForm from './components/NewPatientForm';
import PatientList from './components/PatientList';

function App() {
  return (
    <div className='root'>
      <Header />
      <div className='content'>
        <NewPatientForm />
        <ExistingPatientForm />
        <PatientList />
      </div>
    </div>
  );
}

export default App;
