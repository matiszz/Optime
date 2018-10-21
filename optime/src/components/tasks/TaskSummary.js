import React from 'react';
import './styles.css';
// import moment from 'moment'

// const TaskSummary = ({task}) => {
class TaskSummary extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            taskColor: props.task.color,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return { isHovering: !state.isHovering, };
    }

    render() {
        return (
            <div className="card p-2 my-2"
                 style={{backgroundColor: this.state.taskColor}}
                 onMouseEnter={this.handleMouseHover}
                 onMouseLeave={this.handleMouseHover}>

                <p className="card-title">{this.props.task.descr}</p>
                <div className="row">
                    <div className="col-2">
                        {this.state.isHovering && <a href=""><i className="fas fa-check"/></a>}
                    </div>
                    <div className="col">
                        <p className="text-right small">{this.props.task.duration}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskSummary