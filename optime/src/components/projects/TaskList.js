import React from 'react'
import TaskSummary from './TaskSummary'

const TaskList = ({tasks}) => {
    return (
        <div className="project-list section">
            { tasks && tasks.map(task => {
                return ( <TaskSummary task={task} /> )
            })}
        </div>
    )
};

export default TaskList