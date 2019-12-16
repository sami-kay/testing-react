import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

// componentWillReceiveProps(props){
//   console.log('[Person.js] componentWillReceiveProps', props);
// }

// componentWillUpdate(){
//   console.log('[Persons.js] componentWillUpdate');
// }

shouldComponentUpdate(nextProps, nextState){
  console.log('[Persons.js] shouldComponentUpdate');
  if(nextProps.persons !== this.props.persons){
    return true;
  } else {
    return false;
  }
}

getSnapshotBeforeUpdate(prevProps, prevState){
  console.log('[Persons.js] getSnapshotBeforeUpdate');
  return {message: 'Snapshot'};
}

componentDidUpdate(){
  console.log('[Persons.js] componentDidUpdate');
}

componentWillUnmount(){
  console.log('[Persons.js] componentWillUnmount');
}

  render(){
    console.log('[Persons.js] rendering...');
    return(
      this.props.persons.map((el, index) => {
        return <Person
        click = {() => this.props.clicked(index)}
        key = {el.id}
        name = {el.name}
        age = {el.age}
        change = {(event) => this.props.changed(event, el.id)}
        />
      })
    );
  }
};

export default Persons;
