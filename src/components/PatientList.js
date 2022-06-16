import React, { useContext, useEffect } from 'react';
import { PatientContext } from '../context/patientContext';
import Patient from './Patient';

function PatientList() {
  const { filteredPatients } = useContext(PatientContext);

  const renderedPatientList = filteredPatients?.map((patient) => {
    return <Patient key={patient.id} patient={patient} />;
  });

  return (
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>Patient ID</th>
          <th>Patient Name</th>
          <th>Noted Side Effects</th>
        </tr>
        {renderedPatientList}
      </tbody>
    </table>
  );
}

export default PatientList;
