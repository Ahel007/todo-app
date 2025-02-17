import React, { Component } from 'react'
import Task from '../task'
import './task-list.css'

export default class TaskList extends Component {
  state = {
    condition: 'default',
  }

  render() {
    const elements = this.props.todos.map((item) => {
      const { id } = item
      return (
        <li key={id} className={'default'}>
          <Task {...item} itemDeleted={() => this.props.itemDeleted(id)} />
          {this.state.condition === 'editing' ? (
            <input
              type="text"
              className="edit"
              defaultValue="Editing task"
            ></input>
          ) : null}
        </li>
      )
    })
    return <ul className="todo-list">{elements}</ul>
  }
}
