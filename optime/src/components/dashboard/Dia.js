import TaskList from "../tasks/TaskList";
import React from "react";
import Modal from "react-responsive-modal";
import {createTask} from "../../store/actions/taskActions";
import connect from "react-redux/es/connect/connect";

export class ColDia extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            open: false,
            descr: '',
            day: this.props.day,
            color: '',
            duration: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTask(this.state);
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    };

    toggleHoverState(state) {
        return { isHovering: !state.isHovering, };
    };

    render() {
        return (
            <div className="col col-dia"
                 onMouseEnter={this.handleMouseHover}
                 onMouseLeave={this.handleMouseHover}>
                <h4>{this.props.day}</h4>
                <TaskList tasks={this.props.tasks} day={this.props.day}/>
                {this.state.isHovering && <button type="button"
                                                  className="btn btn-info"
                                                  onClick={this.onOpenModal}>Añadir tarea</button> }

                {/*MODAL*/}
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <form onSubmit={this.handleSubmit} className="white">
                        <h4>Crear una nueva tarea</h4>
                        <div className="form-group">
                            <label htmlFor="descr">Descripción</label>
                            <input type="text" className="form-control" id="descr"
                                   placeholder="Descripción de la tarea" onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="duration">Duración</label>
                            <input type="text" className="form-control" id="duration"
                                   placeholder="Duración estimada" onChange={this.handleChange}/>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend" id="button-addon3">
                                <button
                                    className="btn btn-outline-secondary"
                                    style={{backgroundColor: "#CED73E"}}
                                    onClick={() => this.state.color="#CED73E"}
                                    type="button">
                                </button>
                                <button
                                    className="btn btn-outline-secondary"
                                    style={{backgroundColor: "#F28B7A"}}
                                    onClick={() => this.state.color="#F28B7A"}
                                    type="button">
                                </button>
                                <button
                                    className="btn btn-outline-secondary"
                                    style={{backgroundColor: "#FBAB76"}}
                                    onClick={() => this.state.color="#FBAB76"}
                                    type="button">
                                </button>
                                <button
                                    className="btn btn-outline-secondary"
                                    style={{backgroundColor: "#CAE4BF"}}
                                    onClick={() => this.state.color="#CAE4BF"}
                                    type="button">
                                </button>
                                <button
                                    className="btn btn-outline-secondary"
                                    style={{backgroundColor: "#FAE7BC"}}
                                    onClick={() => this.state.color="#FAE7BC"}
                                    type="button">
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success" onClick={this.onCloseModal}>Crear</button>
                    </form>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.firebase.auth }
};

const mapDispatchToProps = (dispatch) => {
    return { createTask: (task) => dispatch(createTask(task)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(ColDia);