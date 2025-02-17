import React, { Component } from 'react'
import Footer from '../footer'
import NewTaskForm from '../new-task-form'
import TaskList from '../task-list'
import './App.css'

export default class App extends Component {
  state = {
    todoData: [
      {
        label: 'Completed task',
        whenCreated: 'created 17 seconds ago',
        id: 1,
      },
      {
        label: 'Editing task',
        whenCreated: 'created 5 minutes ago',
        id: 2,
      },
      {
        label: 'Active task',
        whenCreated: 'created 5 minutes ago',
        id: 3,
      },
    ],
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((el) => el.id !== id)
      return {
        todoData: newTodoData,
      }
    })
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList todos={this.state.todoData} itemDeleted={this.deleteItem} />
          <Footer />
        </section>
      </section>
    )
  }
}
