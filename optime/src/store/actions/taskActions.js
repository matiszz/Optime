// Create task
export const createTask = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make async call to DB
        const firestore = getFirestore();
        firestore.collection('tasks').add({
            ...task,
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: task });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
        
    }
};