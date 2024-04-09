import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const  AuthContext  = createContext(null);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const createUserWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const createWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    const loginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        return signInWithRedirect(auth, provider);
    }

    const loginWithFacebook = () => {
        return signInWithRedirect(auth, facebookProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
           console.log('What happend');
           setUser(currentUser);
        });

        return () =>  {
            unSubscribe();
        };

    },[]);



    const authInfo = {
        user,
        createUserWithEmailPassword,
        loginWithEmailPassword,
        logOut,
        createWithGoogle,
        loginWithGoogle,
        createWithFacebook,
        loginWithFacebook,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children : PropTypes.node
}

export default AuthProviders;