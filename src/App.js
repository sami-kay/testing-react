import React, {
  Component
} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
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

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = ( <
        div > {
          this.state.persons.map((el, index) => {
            return <Person
            click = {
              () => this.deletePersonHandler(index)
            }
            name = {
              el.name
            }
            age = {
              el.age
            }
            key = {
              el.id
            }
            change = {
              (event) => this.nameChangedHandler(event, el.id)
            }
            />
          })
        } <
        /div>
      );
    }

    return ( <
      div className = "App" >
      <
      h1 > I 'm a React App</h1> <
      button style = {
        style
      }
      onClick = {
        () => this.togglePersonsHandler('Samantha')
      } > Show Name < /button> {
        persons
      } <
      /div>
    );
  }
}

export default App;
