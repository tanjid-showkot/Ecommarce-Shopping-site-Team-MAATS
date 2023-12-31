import { React, createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const providerLogin = (Provider) => {
        return signInWithPopup(auth, Provider)
    }
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }
    const logOut = () => {
        setloading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {

            setUser(currentuser);
            setloading(false);
        })
        return () => unsubscribe();
    }, [])
    const authInfo = {
        createUser
        , signIn,
        updateUser,
        logOut,
        user,
        loading,
        providerLogin



    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
