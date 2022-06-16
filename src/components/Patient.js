import { useContext } from 'react';
import { PatientContext } from '../context/patientContext';

const Patient = ({ patient }) => {
  const { deletePatient, markAsDeceased } = useContext(PatientContext);

  const onButtonClick = () => {
    console.log('deleting patient');
    deletePatient(patient);
    console.log('deleted patient');
    window.location.reload(false);
  };

  const onDeadButtonClick = () => {
    console.log('deleting patient');
    markAsDeceased(patient);
    console.log('deleted patient');
    window.location.reload(false);
  };

  return (
    <tr style={{ backgroundColor: patient.deceased ? 'red' : null }}>
      <th>{patient.id}</th>
      <th>{patient.name}</th>
      <th>{patient.side_effects?.join(', ')}</th>
      <th>
        <button type='button' onClick={onButtonClick}>
          Delete
        </button>
      </th>
      <th>
        <button type='button' onClick={onDeadButtonClick}>
          ☠️
        </button>
      </th>
    </tr>
  );
};

export default Patient;
