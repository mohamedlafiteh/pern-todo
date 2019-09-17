import React, { Component } from "react";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  addTodo = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.title);
    this.setState({
      title: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.addTodo}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
