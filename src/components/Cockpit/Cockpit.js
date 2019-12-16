import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(()=>{
      alert('Saved data');
    }, 1000);
    return () =>{
      console.log('[Cockpit.js] cleanup in progress');
    };
  }, []);

  const assignedClasses = [];

  let btnClasses = '';
  if (props.showPersons) {
      btnClasses = classes.red;
  }

  if (props.personsLength <= 2){
    assignedClasses.push(classes.red);
  } if (props.personsLength <= 1){
    assignedClasses.push(classes.bold);
  }

  return(
    <div className={classes.Cockpit}>
    <h1 > I 'm a React App</h1>
    <p className={assignedClasses.join(' ')}>Working!</p>
    <button className={btnClasses}
    onClick = {props.clicked} > Show Name
    < /button>
    </div>
  );
}

export default React.memo(cockpit);
