import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import ColDia from './Dia';

class Dashboard extends Component {
    render() {
        const { tasks, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />;

        return (
            <div className="container mt-5">
                <div className="row">
                    <ColDia tasks={tasks} day="Lunes"/>
                    <ColDia tasks={tasks} day="Martes"/>
                    <ColDia tasks={tasks} day="Miércoles"/>
                    <ColDia tasks={tasks} day="Jueves"/>
                    <ColDia tasks={tasks} day="Viernes"/>
                    <ColDia tasks={tasks} day="Sábado"/>
                    <ColDia tasks={tasks} day="Domingo"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.firestore.ordered.tasks,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'tasks' }
    ])
)(Dashboard)