import React from 'react';
import InputBox from '../small/InputBox';

const Education = ({ onChange, item }) => {
  return (
    <div className="section">
      <h2 className="header">Education</h2>
      <InputBox
        onChange={onChange}
        value={item.school}
        name="school"
        placeholder="School"
      />
      <InputBox
        onChange={onChange}
        value={item.title}
        name="study"
        placeholder="Study"
      />
      <input
        onChange={onChange}
        value={item.date}
        name="date"
        placeholder="Date Studied"
        type="date"
        className="input-box"
      />
    </div>
  );
};

export default Education;
