import "./App.css";
import React, { Component } from "react";
import Person from "./components/person";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: "demo One",
        },
        {
          name: "dmo Two",
        },

        {
          name: "demo three",
        },
        {
            name: "demo four",
          },
      ],
    };
  }

  render() {
    let persons;
    persons = this.state.persons.map((p) => {
      return <Person name={p.name}/>
    });
    return <div className="App">{persons}</div>
  }
}
export default App;
