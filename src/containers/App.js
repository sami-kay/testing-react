import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    this.state= {
      persons: [{
          id: '2342',
          name: 'Sam',
          age: 26
        },
        {
          id: '5756',
          name: 'Colten',
          age: 27
        },
        {
          id: '3457',
          name: 'Ashleigh',
          age: 27
        },
        {
          id: '7896',
          name: 'Amber',
          age: 31
        }
      ],
      showPersons: false
    }
  }

    static getDerivedStateFromProps(props, state){
      console.log('[App.js] getDerivedStateFromProps', props);
      return state;
  }

componentDidMount() {
  console.log('[App.js] componentDidMount');
}

shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true;
}

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
}

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }

  nameChangedHandler = (event, id) => {
    const person = this.state.persons.findIndex(el => {
      return el.id === id;
    });

    const per = {
      ...this.state.persons[person]
    };

    per.name = event.target.value;

    const persons = [...this.state.persons];
    persons[person] = per;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        /> ;
    }

    return (
      <div className = {classes.App} >
      <Cockpit
      showPersons={this.state.showPersons}
      personsLength={this.state.persons.length}
      clicked={this.togglePersonsHandler}/>
      {persons}
      </div>

    );
  }
}

export default App;
