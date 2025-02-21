import React from 'react'
import TaskFilter from '../tasks-filter'
import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer">
      <span className="todo-count">{props.itemsLeft} items left</span>
      <TaskFilter {...props} />
      <button className="clear-completed" onClick={props.deleteCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
