import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthenticaion from "../Firebase/firebase.init";


initializeAuthenticaion()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState({})



    const auth = getAuth()

    // google sign in 
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user)
        })
        .catch((error) => {
            setError(error)
        })
    }

    // logout 
    const logOut = () => {
        signOut(auth)
        .then(() => '').catch((error) => {
            setError('error')
        })
    }

    // user register 
    const register = (email, confirmPassword, name, phoneNumber, address) => {
        createUserWithEmailAndPassword(auth, email, confirmPassword)
        .then(result => {
            setUser(result.user)
            updateUser(name, phoneNumber, address)
        })
        .catch(error => setError(error))
    }

    const updateUser = (name, phoneNumber, address) => {
        updateProfile(auth.currentUser,{
            displayName:name,
            phoneNumber:phoneNumber,
            address:address
        })
        .then(() => {
            const updateUser = {...user, displayName:name, phoneNumber:phoneNumber, address:address}
            setUser(updateUser)
        })
        .catch(error => {
            setError(error)
        })
    }

    // email and password sign in 
    const signIn = (email, password) => {
        signInWithEmailAndPassword (auth, email, password)
        .then(result => setUser(result.user))
        .catch(error => setError(error))
    }

    // handle auth change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
        return () => unsubscribed
    }, [auth])

    return{
        signInUsingGoogle,
        user,
        error,
        logOut,
        register,
        signIn
    }
}

export default useFirebase