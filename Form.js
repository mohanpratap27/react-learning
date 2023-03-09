import "../App.css";
import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    this.setState({ name }, () => {
      console.log(this.state);
      event.target.name.value = "";
    });
  };

  render() {
    return (
      <div className="formclass">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            autoComplete="off"
          />{" "}
          <br />
          <br />
          <button type="Submit">Save Your Data</button>
        </form>
      </div>
    );
  }
}
export default Form;
