import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/authContext'

const cockpit = (props) => {
  const togglePersons = useRef(null);

  const authContext = useContext(AuthContext)

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    togglePersons.current.click();
    // setTimeout(() => {
    //   alert('save data to cloud');
    // }, 1000);
    return () => {
      console.log('Cleanup work 1nd useEffect')
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect 2nd');
    return () => {
      console.log('Cleanup work 2nd useEffect')
    }
  });

  const assignedClasses = []
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        ref={togglePersons}
        className={btnClass}
        onClick={props.clicked}>
          Toggle Persons
      </button>
      <button onClick={authContext.login}>Log In</button>
    </div>
  )
}

export default React.memo(cockpit);
