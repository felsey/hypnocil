import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { PatientContext } from '../context/patientContext';

function NewPatientForm() {
  const { register, handleSubmit } = useForm();
  const { addPatient } = useContext(PatientContext);

  const onFormSubmit = (data) => {
    // console.log([...data.sideEffects]);
    addPatient({
      name: data.name,
      side_effects: data.sideEffects,
    });
    window.location.reload(false);
  };

  return (
    <>
      <form id='new-patient-form' onSubmit={handleSubmit(onFormSubmit)}>
        <input
          id='patient-name'
          type='text'
          placeholder='Patient Name'
          {...register('name')}
        />
        <select
          name='side_effects'
          id='side-effects'
          form='new-patient-form'
          {...register('sideEffects')}
          multiple
        >
          <option value='Dizziness'>Dizziness</option>
          <option value='Nausea'>Nausea</option>
          <option value='Somnambulism'>Somnambulism</option>
          <option value='Memory'>Memory</option>
          <option value='Severe Allergic Reaction'>
            Severe Allergic Reaction
          </option>
          <option value='Headache'>Headache</option>
        </select>
        <input type='submit' value='Add Patient' />
      </form>
    </>
  );
}

export default NewPatientForm;
