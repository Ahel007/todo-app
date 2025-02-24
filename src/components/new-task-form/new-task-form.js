import React, { Component } from 'react';

import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    value: '',
  };

  onLabelChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onEnter = (e) => {
    const { value } = this.state;
    if (value !== '' && e.key === 'Enter') {
      this.props.onItemAdd(value);
      this.setState({
        value: '',
      });
    }
  };

  render() {
    const { value } = this.state;

    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={this.onLabelChange}
        onKeyDown={this.onEnter}
        value={value}
      ></input>
    );
  }
}
