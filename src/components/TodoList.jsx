import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoList extends Component {
  getStyle = () => {
    return {
      background: "green",
      padding: "10px",
      textDecoration: this.props.todos.completed ? "line-through" : "none"
    };
  };
  render() {
    const { id, title } = this.props.todos;
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.handleChange.bind(this, id)}
        />
        {""}
        <p>{title}</p>
        <button
          style={btnStyle}
          onClick={this.props.handleDelete.bind(this, id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.object.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoList;
