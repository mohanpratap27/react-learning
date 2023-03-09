import "./App.css";
import React, { Component } from "react";
import Person from "./components/person";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: "John ",
          age: "21",
        },
        {
          name: "Roy",
          age: "23",
        },

        {
          name: "Lisa",
          age: "22",
        },

        {
          name: "Sana",
          age: "24",
        },
      ],
      isShow: true,
    };
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  toggleHandler() {
    this.setState({ isShow: !this.state.isShow });
  }

  removeHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons;
    persons = this.state.persons.map((p, index) => {
      return (
        <Person
          key={index}
          name={p.name}
          age={p.age}
          removeHandler={() => this.removeHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <button
          className="btn btn-success togglebtn"
          onClick={this.toggleHandler}
        >
          Click on Me
        </button>
        {this.state.isShow === true ? persons : ""}
      </div>
    );
  }
}
export default App;
