import React from 'react';
import InputBox from '../small/InputBox';

const Practical = ({ onChange, item }) => {
  return (
    <div className="section practical">
      <h2 className="header">Job Experience</h2>
      <InputBox
        onChange={onChange}
        value={item.company}
        name="company"
        placeholder="Company"
      />
      <InputBox
        onChange={onChange}
        value={item.position}
        name="position"
        placeholder="Position"
      />
      <InputBox
        onChange={onChange}
        value={item.tasks}
        name="tasks"
        placeholder="Main Tasks of Your Jobs"
      />
      <input
        onChange={onChange}
        value={item.start}
        name="start"
        placeholder="Job Start Date"
        type="date"
        className="input-box"
      />
      <input
        onChange={onChange}
        value={item.end}
        name="end"
        placeholder="Job End Date"
        type="date"
        className="input-box"
      />
    </div>
  );
};

export default Practical;
