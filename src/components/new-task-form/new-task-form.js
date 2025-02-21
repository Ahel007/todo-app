import React, { Component } from 'react'
import './new-task-form.css'

export default class NewTaskForm extends Component {
  state = {
    value: '',
  }
  onLabelChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  onEnter = (e) => {
    if (this.state.value !== '' && e.key === 'Enter' ) {
      this.props.onItemAdd(this.state.value)
      this.setState({
        value: '',
      })
    }
  }
  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={this.onLabelChange}
        onKeyDown={this.onEnter}
        value={this.state.value}
      ></input>
    )
  }
}
