import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import './task.css'

export default class Task extends Component {

  onCompleted = () => {
    this.props.onToggleCompleted()
  }

  static defaultProps = {
    itemDeleted: () => {},
    onToggleCompleted: () => {},
  }
  
  render() {
    const { label, id, itemDeleted, completed, date } = this.props

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
          <span className="created">
            {`created ${formatDistanceToNow(date, {
              includeSeconds: true,
            })} ago`}
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={itemDeleted}></button>
      </div>
    )
  }
}
