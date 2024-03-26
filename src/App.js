import React, { Component } from 'react';
import './App.css'; // Import your CSS file

class TaskTrackerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  handleChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { tasks, newTask } = this.state;
    if (newTask.trim() !== '') {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: '',
      });
        
    }
    else {
          alert('Please enter a task!');
      }
  };

  handleDelete = (index) => {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter((task, i) => i !== index),
    });
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div className="container">
        <h1>Task Tracker</h1>
        <form onSubmit={this.handleSubmit}>
        
          <input
            type="text"
            placeholder="Add Task"
            value={newTask}
            onChange={this.handleChange}
            className="task-input"
          /> 
          <div>
          <button type="submit">Add</button>
          </div>
         
        </form>
        <table className="task-table">
          <thead>
            <tr>
              <th>Task</th>
              
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task}
                
                  <button onClick={() => this.handleDelete(index)}>
                    Delete
                  </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskTrackerApp;
