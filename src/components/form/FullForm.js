import React, { useState, useEffect } from 'react';
import Fill from './Fill';
import Results from '../Results';

const initial = {
  name: '',
  email: '',
  phone: '',
  school: '',
  study: '',
  date: '',
  company: '',
  position: '',
  tasks: '',
  start: '',
  end: '',
};

function FullForm() {
  const [visible, setVisible] = useState(true);
  const [itemObject, setItems] = useState(initial);

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setItems({
      ...itemObject,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setVisible(false);
  }

  function handleEdit(e) {
    e.preventDefault();
    setVisible(true);
  }

  return (
    <div>
      <form className="form" onSubmit={visible ? handleSubmit : handleEdit}>
        {visible ? (
          <div>
            <Fill onChange={handleChange} item={itemObject} />
          </div>
        ) : (
          <Results item={itemObject} />
        )}
        <button className="submit-button" type={visible ? 'submit' : 'edit'}>
          {visible ? 'Submit Form' : 'Edit Form'}
        </button>
      </form>
    </div>
  );
}

export default FullForm;
