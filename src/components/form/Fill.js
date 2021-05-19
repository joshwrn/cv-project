import React from 'react';
import General from '../form-sections/General';
import Education from '../form-sections/Education';
import Practical from '../form-sections/Practical';

const Fill = ({ onChange, item }) => {
  return (
    <div className="main">
      <General onChange={onChange} item={item} />
      <Practical onChange={onChange} item={item} />
      <Education onChange={onChange} item={item} />
    </div>
  );
};

export default Fill;
