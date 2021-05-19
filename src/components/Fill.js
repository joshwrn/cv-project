import React from 'react';
import General from './General';
import Education from './Education';
import Practical from './Practical';

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
