import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../store/actions/taskActions'
import { Redirect } from 'react-router-dom'

// TODO: Style, initial state of the task.
class CreateTask extends Component {
    state = {
        descr: '',
        day: '',
        color: '',
        duration: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTask(this.state);
        this.props.history.push('/');
    };

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />;

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Task</h5>
                    <div className="input-field">
                        <label htmlFor="title">Description</label>
                        <input type="text" id="descr" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="title">Estimated duration</label>
                        <input type="text" id="duration" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="day">Day</label>
                        <select className="form-control" id="day" onChange={this.handleChange}>
                            <option>Lunes</option>
                            <option>Martes</option>
                            <option>Miércoles</option>
                            <option>Jueves</option>
                            <option>Viernes</option>
                            <option>Sábado</option>
                            <option>Domingo</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <label htmlFor="color">Color</label>
                        <select className="form-control" id="color" onChange={this.handleChange}>
                            <option style={{color: "#CED73E"}}>#CED73E</option>
                            <option style={{color: "#F28B7A"}}>#F28B7A</option>
                            <option style={{color: "#FBAB76"}}>#FBAB76</option>
                            <option style={{color: "#CAE4BF"}}>#CAE4BF</option>
                            <option style={{color: "#FAE7BC"}}>#FAE7BC</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (task) => dispatch(createTask(task))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask)