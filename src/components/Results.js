import React from 'react';
import uniqid from 'uniqid';

const Results = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => {
        return (
          <li
            className="item"
            key={uniqid()}
          >{`${item.name}: ${item.value}`}</li>
        );
      })}
    </ul>
  );
};

export default Results;
