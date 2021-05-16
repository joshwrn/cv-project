import React from 'react';
import InputBox from './small/InputBox';

const General = ({ onChange, stateName, stateEmail, statePhone }) => {
  return (
    <div className="section">
      <InputBox
        onChange={onChange}
        value={stateName}
        name="name"
        placeholder="name"
      />
      <InputBox
        onChange={onChange}
        value={stateEmail}
        name="email"
        placeholder="email"
      />
      <InputBox
        onChange={onChange}
        value={statePhone}
        name="phone"
        placeholder="phone"
      />
    </div>
  );
};

export default General;
