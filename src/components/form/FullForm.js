import React, { Component } from 'react';
import Fill from './Fill';
import Results from '../Results';

class FullForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);

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

  handleChange(e) {
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
      <div>
        <form
          className="form"
          onSubmit={this.state.visible ? this.handleSubmit : this.handleEdit}
        >
          {this.state.visible ? (
            <div>
              <Fill onChange={this.handleChange} item={this.state.itemObject} />
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

export default FullForm;
