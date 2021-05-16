import React from 'react';

const InputBox = ({ name, placeholder, onChange, value }) => {
  return (
    <input
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
      className="input-box"
    />
  );
};

export default InputBox;
