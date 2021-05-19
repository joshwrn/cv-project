import React, { Component } from 'react';
import Fill from './components/Fill';
import Results from './components/Results';
import styles from './styles/styles.css';

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChangeGeneral = this.handleChangeGeneral.bind(this);

    this.state = {
      visible: true,
      itemObject: {
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
      },
    };
  }

  handleChangeGeneral(e) {
    e.preventDefault();
    const { name, value } = e.target;
    // you have to wrap in brackets to describe string inside object property
    // this.setState({ [e.target.name]: e.target.value }); //idk if this.state is necessary
    this.setState((prevState) => {
      return {
        itemObject: {
          ...prevState.itemObject,
          [name]: value,
        },
      };
    });
  }

  handleSubmit(e) {
    // using conditionals instead of separate handles caused lag and bugs
    e.preventDefault();
    this.setState({
      visible: false,
    });
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({
      visible: true,
    });
  }

  render() {
    return (
      <div className="App">
        <form
          className="form"
          onSubmit={this.state.visible ? this.handleSubmit : this.handleEdit}
        >
          <h2 className="main-header">CV Form</h2>
          {this.state.visible ? (
            <div>
              <Fill
                onChange={this.handleChangeGeneral}
                item={this.state.itemObject}
              />
            </div>
          ) : (
            <Results item={this.state.itemObject} />
          )}
          <button
            className="submit-button"
            type={this.state.visible ? 'submit' : 'edit'}
          >
            {this.state.visible ? 'Submit Form' : 'Edit Form'}
          </button>
        </form>
      </div>
    );
  }
}

export default App;
