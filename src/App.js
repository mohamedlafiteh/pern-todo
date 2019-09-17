import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";
import Form from "./components/Form";
import uuid from "uuid";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: uuid.v4(),
          title: "play football",
          completed: false
        },
        {
          id: uuid.v4(),
          title: "meet my friend",
          completed: true
        },
        {
          id: uuid.v4(),
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
      id: uuid.v4(),
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
