import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import app from '../firebase/firebase.config';





export const AuthContext = createContext(null);

export const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)
    const googleProvider = new GoogleAuthProvider();


    
    const googleSignin = () => {
        setloading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // const signUp = (email, password) => {
    //     setloading(true)
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }
    
    // const login = (email, password) => {
    //     setloading(true)
    //     return signInWithEmailAndPassword(auth, email, password)
    // }

    
    // const logOut = () => {
    //     return signOut(auth)
    // }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
           
        })
        return unsubscribe
    }, [])
    const authInfo = {
        user,
        loading,
        setloading,
        googleSignin,
        // logOut,
        // signUp,
        // login,
        // profileUpdate,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;