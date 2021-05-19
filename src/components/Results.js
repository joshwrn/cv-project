import React from 'react';

const Results = ({ item }) => {
  return (
    <div className="main">
      <div>
        <h2 className="header">Personal</h2>
        <p className="item"> Name: {item.name}</p>
        <p className="item"> Email: {item.email}</p>
        <p className="item"> Phone: {item.phone}</p>
      </div>
      <div className="practical">
        <h2 className="header">Job Experience</h2>
        <p className="item"> Company: {item.company}</p>
        <p className="item"> Position: {item.position}</p>
        <p className="item"> Tasks: {item.tasks}</p>
        <p className="item"> Start Date: {item.start}</p>
        <p className="item"> End Date: {item.end}</p>
      </div>
      <div>
        <h2 className="header">Education</h2>
        <p className="item"> Name: {item.school}</p>
        <p className="item"> Email: {item.study}</p>
        <p className="item"> Phone: {item.date}</p>
      </div>
    </div>
  );
};

export default Results;
