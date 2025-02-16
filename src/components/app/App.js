import React from 'react'
import Footer from '../footer'
import NewTaskForm from '../new-task-form'
import TaskList from '../task-list'
import './App.css'

const App = () => {
  const todoData = [
    {
      label: 'Completed task',
      state: 'completed',
      whenCreated: 'created 17 seconds ago',
      id: 1,
    },
    {
      label: 'Editing task',
      state: 'editing',
      whenCreated: 'created 5 minutes ago',
      id: 2,
    },
    {
      label: 'Active task',
      state: 'default',
      whenCreated: 'created 5 minutes ago',
      id: 3,
    },
  ]
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList todos={todoData} />
        <Footer />
      </section>
    </section>
  )
}

export default App
