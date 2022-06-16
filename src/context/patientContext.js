import { createContext, useState, useEffect } from 'react';

export const PatientContext = createContext({});

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [filteredPatients, setFilteredPatients] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/patients')
      .then((response) => response.json())
      .then((data) => {
        setPatients(data);
        setFilteredPatients(data);
      });
  }, []);

  useEffect(() => {
    if (!searchInput) setFilteredPatients(patients);

    const regexp = new RegExp(searchInput, 'i');
    const filteredList = patients?.filter(
      (patient) =>
        regexp.test(patient.name) ||
        regexp.test(patient.side_effects.join(', '))
    );
    setFilteredPatients(filteredList);
  }, [searchInput]);

  const addPatient = (patient) => {
    console.log(patient);

    const patientClean = { ...patient, deceased: false };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patientClean),
    };

    fetch('http://localhost:3000/patients', requestOptions)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const deletePatient = (patient) => {
    console.log(patient);
    fetch(`http://localhost:3000/patients/${patient.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: alert(`${patient.name} was deleted succesfully.`),
    });
  };

  const updatePatient = (existingPatient, sideEffect) => {
    const patient = patients.filter((patient) => {
      return patient.id === parseInt(existingPatient);
    });

    const updatePat = { ...patient[0] };
    updatePat.side_effects.push(sideEffect);

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatePat),
    };

    fetch(`http://localhost:3000/patients/${updatePat.id}`, requestOptions)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const markAsDeceased = (patient) => {
    const updatePat = { ...patient };
    updatePat.deceased = true;

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatePat),
    };

    fetch(`http://localhost:3000/patients/${patient.id}`, requestOptions)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const value = {
    patients,
    setPatients,
    addPatient,
    searchInput,
    setSearchInput,
    filteredPatients,
    deletePatient,
    updatePatient,
    markAsDeceased,
  };

  return (
    <PatientContext.Provider value={value}>{children}</PatientContext.Provider>
  );
};
