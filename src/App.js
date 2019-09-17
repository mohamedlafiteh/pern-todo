import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";
import Form from "./components/Form";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: "play football",
          completed: false
        },
        {
          id: 2,
          title: "meet my friend",
          completed: true
        },
        {
          id: 3,
          title: "eat dinner with family",
          completed: false
        }
      ]
    };
  }

  handleChange = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  handleDelete = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };
  addNewTodo = title => {
    const newTodo = {
      id: 4,
      title: title,
      completed: null
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  render() {
    return (
      <div>
        <Form addNewTodo={this.addNewTodo} />
        <Todos
          todos={this.state.todos}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
