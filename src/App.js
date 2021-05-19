import React, { Component } from 'react';
import FullForm from './components/form/FullForm';
import Fill from './components/form/FullForm';
import Results from './components/Results';
import styles from './styles/styles.css';

function App() {
  return (
    <div className="App">
      <h2 className="main-header">CV Form</h2>
      <FullForm />
    </div>
  );
}

export default App;
