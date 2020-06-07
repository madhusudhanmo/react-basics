import React, { PureComponent } from 'react';
import Person from '../Persons/Person/Person'

class Persons extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js] shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //     ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  componentWillUnmount() {
    console.log('[App.js] componentWillUnmount')
  }
  render() {
    console.log('[Persons.js]')
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed = {(event) => this.props.changed(event, person.id)}
          isAuth={this.props.loggedIn}
        />
      );
    });
  };
};

export default Persons;
