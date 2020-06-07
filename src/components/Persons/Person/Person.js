import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/authContext';

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js]')
    return (
      <Aux>
        {this.context.authenticated ? <p>Authenticated</p> : <p>Log In</p>}
        <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input
          type='text'
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>
    );
  };
};

Person.propTypes = {
  click: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
