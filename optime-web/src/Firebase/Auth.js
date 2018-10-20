import { auth } from './firebase';

// Sign Up
export function doCreateUserWithEmailAndPassword(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
}

// Sign In
export function doSignInWithEmailAndPassword (email, password) {
    auth.signInWithEmailAndPassword(email, password);
}

// Sign out
export function doSignOut() {
    auth.signOut();
}

// Password Reset
export function doPasswordReset(email) {
    auth.sendPasswordResetEmail(email);
}

// Password Change
export function doPasswordUpdate(password) {
    auth.currentUser.updatePassword(password);
}
