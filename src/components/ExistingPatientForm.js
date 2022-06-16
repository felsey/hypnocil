import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { PatientContext } from '../context/patientContext';

const ExistingPatientForm = () => {
  const { register, handleSubmit } = useForm();
  const { updatePatient, patients } = useContext(PatientContext);

  const onFormSubmit = (data) => {
    console.log('updating patient');
    updatePatient(data.patient, data.side_effect);
    console.log('updated patient');
    window.location.reload(false);
  };

  const patientList = patients?.map((patient) => {
    return (
      <option key={patient.id} value={patient.id}>
        {patient.name}
      </option>
    );
  });

  return (
    <>
      <form id='existing-patient-form' onSubmit={handleSubmit(onFormSubmit)}>
        <select
          name='patient-name'
          id='patient-name'
          form='existing-patient-form'
          {...register('patient')}
        >
          {patientList}
        </select>
        <select
          name='side_effects'
          id='side-effects'
          form='existing-patient-form'
          {...register('side_effect')}
        >
          <option value='dizziness'>Dizziness</option>
          <option value='nausea'>Nausea</option>
          <option value='somnambulism'>Somnambulism</option>
          <option value='memory'>Memory</option>
          <option value='allergy'>Severe Allergic Reaction</option>
          <option value='headache'>Headache</option>
        </select>
        <input type='submit' value='Add side effect' />
      </form>
    </>
  );
};

export default ExistingPatientForm;
