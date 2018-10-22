const initState = {
    tasks: [
        {descr: 'My first task', day: 'Lunes', duration: '30 min', color: '#ffa726'},
        {descr: 'Delete this task', day: 'Martes', duration: '3 seg', color: '#29b6f6'},
        {descr: 'Move this task to Thursday', day: 'Martes', duration: '1 h', color: '#ab47bc'},
    ]
};

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
        }
};

export default projectReducer