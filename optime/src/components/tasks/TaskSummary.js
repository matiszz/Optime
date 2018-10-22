import React from 'react';
import './styles.css';
import {deleteTask} from "../../store/actions/taskActions";
import connect from "react-redux/es/connect/connect";

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

    handleDelete = (e) => {
        e.preventDefault();
        this.props.deleteTask(this.props.task);
    };

    render() {
        return (
            <div className="card p-2 my-2 targeta"
                 style={{backgroundColor: this.state.taskColor}}
                 onMouseEnter={this.handleMouseHover}
                 onMouseLeave={this.handleMouseHover}>

                <p className="card-title">{this.props.task.descr}</p>
                <div className="row">
                    <div className="col-2">
                        { <a onClick={this.handleDelete}><i className="fas fa-check"/></a>}
                    </div>
                    <div className="col">
                        <p className="text-right small">{this.props.task.duration}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.firebase.auth }
};

const mapDispatchToProps = (dispatch) => {
    return { deleteTask: (task) => dispatch(deleteTask(task)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskSummary);