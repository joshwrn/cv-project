import React from 'react';
import InputBox from './small/InputBox';

const Practical = ({
  onChange,
  stateCompany,
  statePosition,
  stateTasks,
  stateStart,
  stateEnd,
}) => {
  return (
    <div className="section">
      <InputBox
        onChange={onChange}
        value={stateCompany}
        name="company"
        placeholder="Company"
      />
      <InputBox
        onChange={onChange}
        value={statePosition}
        name="position"
        placeholder="Position"
      />
      <InputBox
        onChange={onChange}
        value={stateTasks}
        name="tasks"
        placeholder="Main Tasks of Your Jobs"
      />
      <InputBox
        onChange={onChange}
        value={stateStart}
        name="start"
        placeholder="Job Start Date"
      />
      <InputBox
        onChange={onChange}
        value={stateEnd}
        name="end"
        placeholder="Job End Date"
      />
    </div>
  );
};

export default Practical;
