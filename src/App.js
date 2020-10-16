import React, { Component } from 'react';
import Task from "./Components/Task";
import './App.css';
import NavBar from './Components/NavBar';

class App extends Component {
  state = {
    tasks: [
      { title: "Title1", content:"content1" },
      { title: "Title2", content:"content2" },
      { title: "Title3", content:"content3" },
      { title: "Title4", content:"content4" },
    ]
  }

  handleDelete = (title) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.title !== title)
    })
  }

  render() {
    return (
      <>
        <NavBar/>
        <div className="row">
          {
            this.state.tasks.map((task, index) => {
              return <Task title={task.title} content={task.content} delete={this.handleDelete} key={index}/>
            })
          }
        </div>
      </>
    );
  };
}

export default App;
