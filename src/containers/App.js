import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/authContext'

class App extends Component {
  constructor(props) {
    console.log('[App.js] constructor')
    super(props)
  }

  state = {
    persons: [
      {id: 1, name: "Madhu", age: 29},
      {id: 2, name: "Manu", age: 31},
      {id: 3, name: "Chaitra", age: 25}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js]', props)
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  componentWillUnmount() {
    console.log('[App.js] componentWillUnmount')
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState((prevState, props) => {
      return {
        persons: persons, changeCounter: prevState.changeCounter + 1
      }
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const togglePersons = this.state.showPersons
    this.setState({showPersons: !togglePersons})
  }

  loginHandler = () => {
    this.setState((prevState, props) => {
      return {authenticated: prevState.authenticated ? false : true}
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          loggedIn={this.state.authenticated}
        />
    }

    return (
      <Aux>
        <button onClick={() => this.setState({showCockpit: false})}>Hide Cockpit</button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          this.state.showCockpit && <Cockpit
            title={this.props.appTitle}
            clicked={this.togglePersonsHandler}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
          />
          {persons}
        </AuthContext.Provider>
      </Aux>

    );
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, "I'm a superman"))
  }
}

export default withClass(App, classes.App);
