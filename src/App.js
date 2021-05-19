import React, { Component } from 'react';
import FullForm from './components/form/FullForm';
import Fill from './components/form/FullForm';
import Results from './components/Results';
import styles from './styles/styles.css';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <h2 className="main-header">CV Form</h2>
        <FullForm />
      </div>
    );
  }
}

export default App;
