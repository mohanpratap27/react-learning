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
      isShow: true,
    };
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  toggleHandler() {
    this.setState({ isShow: !this.state.isShow });
  }
  render() {
    let persons;
    persons = this.state.persons.map((p, index) => {
      return <Person key={index} name={p.name} />;
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
