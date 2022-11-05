import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    
    const [user, setUser] = useState(null)

    // loading state
    const [loading, setLoading] = useState(true);

    // createuser and signOut
    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //signOut 
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // thirdParty call
    useEffect(()=> {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('crruentUser inside state change', currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return () => unSubscribe ();
    }, [])

    const authInfo = {user, loading, createUser, signIn, logOut}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;