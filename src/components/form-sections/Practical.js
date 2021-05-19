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
      <InputBox
        onChange={onChange}
        value={item.start}
        name="start"
        placeholder="Job Start Date"
      />
      <InputBox
        onChange={onChange}
        value={item.end}
        name="end"
        placeholder="Job End Date"
      />
    </div>
  );
};

export default Practical;
