import React, { Component } from 'react'
import './task.css'

export default class Task extends Component {
  state = {
    condition: 'description',
  }

  onCompleted = () => {
    this.setState(({ condition }) => {
      let newCondition = 'description'

      if (condition === 'description') {
        newCondition += ' completed'
      }
      return { condition: newCondition }
    })
  }

  render() {
    const { label, whenCreated, id, itemDeleted } = this.props
    return (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          id={id}
          onClick={this.onCompleted}
        ></input>
        <label htmlFor={id}>
          <span className={this.state.condition}>{label}</span>
          <span className="created">{whenCreated}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={itemDeleted}></button>
      </div>
    )
  }
}
