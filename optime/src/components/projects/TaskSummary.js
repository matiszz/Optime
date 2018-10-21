import React from 'react'
import moment from 'moment'

const TaskSummary = ({task}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title" color={task.color}>{task.descr}</span>
                <p>{task.duration}, {task.day}</p>
            </div>
        </div>
    )
};

export default TaskSummary