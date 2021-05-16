import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';
import Results from './components/Results';
import styles from './styles/styles.css';

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);

    this.state = {
      visible: true,
      items: [],
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
  }

  handleChangeGeneral(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value }); //idk if this.state is necessary
  }

  handleChangeEducation(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value }); //idk if this.state is necessary
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      visible: false,
      items: [
        { name: 'Phone', value: this.state.phone },
        { name: 'Name', value: this.state.name },
        { name: 'Email', value: this.state.email },
        { name: 'School', value: this.state.school },
        { name: 'Title', value: this.state.study },
        { name: 'Date', value: this.state.date },
        { name: 'Company', value: this.state.company },
        { name: 'Position', value: this.state.position },
        { name: 'Tasks', value: this.state.tasks },
        { name: 'Start', value: this.state.start },
        { name: 'End', value: this.state.end },
      ],
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
          <h2 className="header">CV Form</h2>
          {this.state.visible ? (
            <div>
              <General
                onChange={this.handleChangeGeneral}
                stateName={this.state.name}
                stateEmail={this.state.email}
                statePhone={this.state.phone}
              />
              <Education
                onChange={this.handleChangeEducation}
                stateSchool={this.state.school}
                stateTitle={this.state.study}
                stateDate={this.state.date}
              />
              <Practical
                onChange={this.handleChangeEducation}
                stateCompany={this.state.company}
                statePosition={this.state.position}
                stateTasks={this.state.tasks}
                stateStart={this.state.start}
                stateEnd={this.state.end}
              />
            </div>
          ) : (
            <Results items={this.state.items} />
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
