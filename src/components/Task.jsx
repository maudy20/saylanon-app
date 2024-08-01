import React from 'react'

const Task = ({
  index,
  id,
  description,
  assignee,
  deadline,
  status,
  toggleStatus,
}) => {
  const handleClick = () => {
    toggleStatus(id)
  }

  return (
    <li>
      <div className="content">
        <h4 className="ids">{id}</h4>
        <b>No:</b>
        <h4>{index + 1}</h4>
        <b>Description:</b>
        <h4>{description}</h4>
        <b>Assignee:</b>
        <h4>{assignee}</h4>
        <b>Deadline:</b>
        <h4>{deadline}</h4>
        <b>Status:</b>
        <h4>{status}</h4>
        <button onClick={handleClick}>Toggle Status</button>
      </div>
    </li>
  )
}

export default Task
