import React, { useContext } from 'react';
import { PatientContext } from '../context/patientContext';

function Header() {
  const { searchInput, setSearchInput } = useContext(PatientContext);

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <header>
      <div>
        <img src='./images/hypnocil-logo.png' />
        <h1>Clinical Trials</h1>
      </div>
      <input
        id='search'
        type='text'
        placeholder='Search...'
        value={searchInput}
        onChange={onInputChange}
      ></input>
    </header>
  );
}

export default Header;
