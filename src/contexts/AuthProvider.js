import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [dbUser, setDbUser] = useState(null)

    // const userEmail = user?.email;


    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () => {
        setDbUser(null)
        setLoading(true);
        return signOut(auth);
    }










    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('dbuser observing');
            const emailuser = currentUser?.email

            fetch(`http://localhost:5000/users/role/${emailuser}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setDbUser(data)
                })

            // setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])







    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])


    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading,
        dbUser


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;