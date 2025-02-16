import React from 'react'
import Task from '../task'
import './task-list.css'

const TaskList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { state, id, ...itemProps } = item
    return (
      <li key={id} className={state}>
        <Task {...itemProps} />
        {state === 'editing' ? (
          <input type="text" className="edit" value="Editing task"></input>
        ) : null}
      </li>
    )
  })
  return <ul className="todo-list">{elements}</ul>
}

export default TaskList
