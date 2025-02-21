import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import './task.css'

export default class Task extends Component {
  state = {
    datePass: formatDistanceToNow(this.props.date, { includeSeconds: true }),
  }
  onCompleted = () => {
    this.props.onToggleCompleted()
  }

  render() {
    const { label, id, itemDeleted, completed } = this.props
    // setInterval(
    //   this.setState({
    //     datePass: formatDistanceToNow(this.props.date),
    //   }),
    //   { includeSeconds: true },
    //   2000
    // )
    let condition = 'description'
    if (completed) {
      condition += ' completed'
    }
    return (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          id={id}
          onClick={this.onCompleted}
          defaultChecked={completed}
        ></input>
        <label htmlFor={id}>
          <span className={condition}>{label}</span>
          <span className="created">{this.state.datePass}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={itemDeleted}></button>
      </div>
    )
  }
}
