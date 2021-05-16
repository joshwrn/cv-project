import React from 'react';
import InputBox from './small/InputBox';

const Education = ({ onChange, stateSchool, stateTitle, stateDate }) => {
  return (
    <div className="section">
      <InputBox
        onChange={onChange}
        value={stateSchool}
        name="school"
        placeholder="School"
      />
      <InputBox
        onChange={onChange}
        value={stateTitle}
        name="study"
        placeholder="Study"
      />
      <InputBox
        onChange={onChange}
        value={stateDate}
        name="date"
        placeholder="Date Studied"
      />
    </div>
  );
};

export default Education;
