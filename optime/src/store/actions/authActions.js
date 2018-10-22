
// Sign In
export const signIn = (credentials) => {
    return (dispatchEvent, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatchEvent({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatchEvent({ type: 'LOGIN_ERROR', err})
        });
    }
};

// Sign Out
export const signOut = () => {
    return (dispatchEvent, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatchEvent({ type: 'SIGNOUT_SUCCESS' });
        })
    }
};

// Sign Up
export const signUp = (newUser) => {
    return (dispatchEvent, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatchEvent({ type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatchEvent({ type: 'SIGNUP_ERROR', err})
        })
    }
};