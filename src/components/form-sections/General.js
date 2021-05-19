import React from 'react';
import InputBox from '../small/InputBox';

const General = ({ onChange, item }) => {
  return (
    <div className="section">
      <h2 className="header">Personal</h2>
      <InputBox
        onChange={onChange}
        value={item.name}
        name="name"
        placeholder="name"
      />
      <InputBox
        onChange={onChange}
        value={item.email}
        name="email"
        placeholder="email"
      />
      <InputBox
        onChange={onChange}
        value={item.phone}
        name="phone"
        placeholder="phone"
      />
    </div>
  );
};

export default General;
