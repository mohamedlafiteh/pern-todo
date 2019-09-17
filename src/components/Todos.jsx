import React, { Component } from "react";
import TodoList from "./TodoList";
import PropTypes from "prop-types";
import todo from "./todo1.jpg";

export class Todos extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${todo})`,
          minHeight: "60vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "600px"
        }}
      >
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
