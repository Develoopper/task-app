import React, { Component } from 'react';
import Task from "./Components/Task";
import AppBar from './Components/AppBar';
import AddModal from './Components/AddModal';
import './App.css';
import { Grid } from '@material-ui/core';
import FAB from './Components/FAB';

class App extends Component {
  state = {
    tasks: [
      { title: "Title 1", content: "Content 1" },
      { title: "Title 2", content: "Content 2" },
      { title: "Title 3", content: "Content 3" },
      { title: "Title 4", content: "Content 4" },
    ],
  }

  handleAdd = (title, content) => {
    this.setState({
      tasks: [...this.state.tasks, { title, content }]
    })
  }

  handleDelete = (title) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.title !== title)
    })
  }

  render() {
    return (
      <>
        <AppBar count={this.state.tasks.length}/>
        <Grid container spacing={1} style={{ marginTop: 20 }}>
          {
            this.state.tasks.map((task, index) => {
              return <Task title={task.title} content={task.content} handleDelete={this.handleDelete} key={index}/>
            })
          }
        </Grid>
        <AddModal handleAdd={this.handleAdd}/>
      </>
    );
  };
}

export default App;
