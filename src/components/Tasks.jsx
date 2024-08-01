import React, { useState } from 'react'
import Task from './Task'
import SearchFilter from './SearchFilter'

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Organize Files',
      assignee: 'Jordan',
      deadline: '30/7/2024',
      status: 'Pending',
    },
    {
      id: 2,
      description: 'Prepare Presentation',
      assignee: 'John',
      deadline: '01/8/2024',
      status: 'Pending',
    },
    {
      id: 3,
      description: 'Email Follow-up',
      assignee: 'Jane',
      deadline: '12/8/2024',
      status: 'Completed',
    },
    {
      id: 4,
      description: 'Book Flight Tickets',
      assignee: 'Chris',
      deadline: '28/7/2024',
      status: 'Pending',
    },
    {
      id: 5,
      description: 'Washing Clothes',
      assignee: 'Jay Ann',
      deadline: '24/7/2024',
      status: 'Completed',
    },
    {
      id: 6,
      description: 'Grocery Shopping',
      assignee: 'Mike',
      deadline: '15/8/2024',
      status: 'Completed',
    },
    {
      id: 7,
      description: 'Update Website',
      assignee: 'Taylor',
      deadline: '08/8/2024',
      status: 'Pending',
    },
    {
      id: 8,
      description: 'Call Vendor',
      assignee: 'Riley',
      deadline: '25/7/2024',
      status: 'Pending',
    },
    {
      id: 9,
      description: 'Doctor Appointment',
      assignee: 'Emily',
      deadline: '10/8/2024',
      status: 'Completed',
    },
    {
      id: 10,
      description: 'Schedule Team Meeting',
      assignee: 'Pat',
      deadline: '03/8/2024',
      status: 'Pending',
    },
  ])

  const toggleStatus = id => {
    const updatedTasks = tasks.map(task =>
      task.id === id
        ? {
            ...task,
            status: task.status === 'Pending' ? 'Completed' : 'Pending',
          }
        : task
    )
    setTasks(updatedTasks)
  }

  const [searchQuery, setSearchQuery] = useState('')

  const filteredTasks = tasks.filter(task =>
    task.assignee.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  )

  return (
    <div>
      <div className="header">
        <strong>Task List</strong>
        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <Task
            key={task.id}
            index={index}
            id={task.id}
            description={task.description}
            assignee={task.assignee}
            deadline={task.status === 'Completed' ? '' : task.deadline}
            status={task.status}
            toggleStatus={() => toggleStatus(task.id)}
          />
        ))}
      </ul>
    </div>
  )
}