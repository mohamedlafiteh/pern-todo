import React, { Component } from "react";
import TodoList from "./TodoList";
import PropTypes from "prop-types";
export class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todos, index) => {
          return (
            <TodoList
              key={index}
              todos={todos}
              handleChange={this.props.handleChange}
              handleDelete={this.props.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};
export default Todos;
