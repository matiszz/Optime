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

// Create task
export const deleteTask = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make async call to DB
        const firestore = getFirestore();
        let collectionRef = firestore.collection('tasks');
        collectionRef.where("descr", "==", task.descr).get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                doc.ref.delete().then(() => {
                    console.log("Document successfully deleted!");
                }).catch(function(error) {
                    console.error("Error removing document: ", error);
                });
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });

    }
};