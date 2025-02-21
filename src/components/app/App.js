import React, { Component } from 'react'
import Footer from '../footer'
import NewTaskForm from '../new-task-form'
import TaskList from '../task-list'
import './App.css'

export default class App extends Component {
  maxId = 100

  state = {
    todoData: [
      this.createTodoItem('Completed task', 'created 17 seconds ago'),
      this.createTodoItem('Editing task', 'created 5 minutes ago'),
      this.createTodoItem('Active task', 'created 5 minutes ago'),
    ],
    filter: 'all',
    date: new Date(),
  }

  createTodoItem(label) {
    return {
      label: label,
      completed: false,
      id: this.maxId++,
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((el) => el.id !== id)
      return {
        todoData: newTodoData,
      }
    })
  }

  deleteCompleted = () => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((el) => !el.completed)
      return {
        todoData: newTodoData,
      }
    })
  }

  itemAdd = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newItem],
      }
    })
  }

  filter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.completed)
      case 'completed':
        return items.filter((item) => item.completed)
      default:
        return items
    }
  }
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)
    const newTodoData = arr[idx]
    newTodoData[propName] = !newTodoData[propName]
    return arr.with(idx, newTodoData)
  }
  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'completed'),
      }
    })
  }
  onFilterChange = (filter) => this.setState({ filter })

  render() {
    const visibleItems = this.filter(this.state.todoData, this.state.filter)
    const itemsLeft = this.state.todoData.filter((el) => !el.completed).length
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdd={this.itemAdd} />
        </header>
        <section className="main">
          <TaskList
            todos={visibleItems}
            itemDeleted={this.deleteItem}
            onToggleCompleted={this.onToggleCompleted}
            date={this.state.date}
          />
          <Footer
            itemsLeft={itemsLeft}
            filter={this.state.filter}
            onFilterChange={this.onFilterChange}
            deleteCompleted={this.deleteCompleted}
          />
        </section>
      </section>
    )
  }
}
