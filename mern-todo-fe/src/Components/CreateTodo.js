import React, { Component } from "react";

export default class CreateTodo extends Component {
  state = {
    todo_description: "",
    todo_responsibility: "",
    todo_priority: "",
    todo_completed: false
  };

  handelChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handelSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    this.setState({
      todo_description: "",
      todo_responsibility: "",
      todo_priority: "",
      todo_completed: false
    });
  };

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.handelSubmit}>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              name="todo_description"
              value={this.state.todo_description}
              onChange={e => this.handelChange(e)}
            />

            <label>Responsible:</label>
            <input
              type="text"
              className="form-control"
              name="todo_responsibility"
              value={this.state.todo_responsibility}
              onChange={e => this.handelChange(e)}
            />

            <label>Priority:</label>
            <input
              type="text"
              className="form-control"
              name="todo_priority"
              value={this.state.todo_priority}
              onChange={e => this.handelChange(e)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
