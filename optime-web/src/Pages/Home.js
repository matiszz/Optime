import React from 'react';
import './styles.css';
import { fire } from '../Firebase'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
    }
    componentWillMount(){
        /* Create reference to Tasks in Firebase Database */
        let tasks = fire.database().ref('Tareas');
        tasks.on('child_added', data => {
            /* Update React state when message is added at Firebase Database */
            let task = { text: data.val(),  id: data.key };
            // Add task at start of array
            // this.setState({ messages: [task].concat(this.state.messages) });
        })
    }
    addMessage(e){
        e.preventDefault();
        /* Send the message to Firebase */
        let newTask = {
                    "descripcion": this.descr.value,
                    "dia": this.day.value,
                    "duracionEst": this.time.value,
                    "duracionReal": null,
                    "color": this.color.value };
        fire.database().ref('Tareas').push(newTask);
        // this.inputEl.value = ''; // <- clear the input
    }
    render() {
        return (
            <div>
                <h1>OpTime</h1>
                <div className="card">
                    <div className="card-body input-temp">
                        <h5 className="card-title">New task</h5>
                        <form onSubmit={this.addMessage.bind(this)}>
                            <div className="form-group">
                                <input type="text" ref={txt => this.descr=txt}
                                       className="form-control" id="taskDescr" placeholder="Task description"/>
                                <input type="date" ref={txt => this.day=txt}
                                       className="form-control" id="taskDay" placeholder="Day"/>
                                <input type="number" ref={txt => this.time=txt}
                                       className="form-control" id="taskTime" placeholder="Duration of the task"/>
                                <input type="text" ref={txt => this.color=txt}
                                       className="form-control" id="timeColor" placeholder="Task color"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <ul>
                    { /* Render the list of messages */
                        this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
                    }
                </ul>
            </div>
        );
    }
}

export default Home;