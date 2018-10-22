import React from 'react'
import TaskSummary from './TaskSummary'

const TaskList = ({tasks, day}) => {
    return (
        <div className="project-list section">
            { tasks && tasks.map(task => {
                if (task.day === day) return ( <TaskSummary task={task} /> )
            })}
        </div>
    )
};

export default TaskList