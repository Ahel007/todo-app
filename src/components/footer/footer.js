import React from 'react';

import TaskFilter from '../tasks-filter';
import './footer.css';

const Footer = ({ itemsLeft, deleteCompleted = () => {}, ...props }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeft} items left</span>
      <TaskFilter {...props} />
      <button className="clear-completed" onClick={deleteCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
