import React, { Component } from "react";
import PersonStyle from "./person.module.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className={PersonStyle.maindiv} onClick={this.props.removeHandler}>
        {this.props.index}
        <h2>Hello My Name {this.props.name}</h2>
        <h2>age: {this.props.age}</h2>
      </div>
    );
  }
}
export default Person;
