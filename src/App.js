import React, { Component } from 'react';
import Task from "./Components/Task";
import AppBar from './Components/AppBar';
import AddModal from './Components/AddModal';
import { CircularProgress, Grid } from '@material-ui/core';
import ZeroTask from './Components/ZeroTask';

class App extends Component {
  state = {
    tasks: [],
    loading: true
  }

  // CRUD - Create(POST) Read(GET) Update(PATCH) Delete(DELETE)

  // called once once the component is mounted
  componentDidMount() {
    // send http request to the api 
    fetch('https://api.mocki.io/v1/13f44462')
      .then((res) => {
        // parse json response to js object
        return res.json();
      })
      .then((data) => {
        // set loading to false
        this.setState({ loading: false })

        // add content attribute
        data.map(task => {
          task.content = task.description;
        })

        // set tasks array 
        this.setState({
          tasks: data
        })
      })
      .catch((error) => {
        // TODO:
        // set loading to false
        this.setState({ loading: false })

        // set tasks array 
        this.setState({
          tasks: [
            { title: "Title 1", content: "Content 1" },
            { title: "Title 2", content: "Content 2" },
            { title: "Title 3", content: "Content 3" },
            { title: "Title 4", content: "Content 4" },
          ]
        })
      });
  }

  // add task
  handleAdd = (title, content) => {
    this.setState({
      // add { title, content } at the end of the tasks array
      tasks: [...this.state.tasks, { title, content }]
    })
  }
  
  // delete task
  handleDelete = (title) => {
    this.setState({
      // let just the tasks that (task.title !== title)
      tasks: this.state.tasks.filter(task => task.title !== title)
    })
  }

  render() {
    return (
      <>
        <AppBar count={this.state.tasks.length}/>
        {
          this.state.loading ?
            <CircularProgress size={200}/>
          :
            // TODO:
            <Grid container spacing={1} style={{ marginTop: 20 }} justify={!this.state.tasks.length && "center"}>
              {
                this.state.tasks.length === 0 ?
                  <ZeroTask/>
                : 
                  this.state.tasks.map((task, index) => {
                    return (
                      <Task 
                        title={task.title} content={task.content} 
                        handleDelete={this.handleDelete} key={index}
                      />
                    )
                  })
              }
            </Grid>
        }
        <AddModal handleAdd={this.handleAdd}/>
      </>
    );
  };
}

export default App;
