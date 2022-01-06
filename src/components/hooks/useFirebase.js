import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthenticaion from "../Firebase/firebase.init";


initializeAuthenticaion()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState({})



    const auth = getAuth()

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


    const logOut = () => {
        signOut(auth)
        .then(() => {
            console.log('successfull')
        }).catch((error) => {
            console.log('poor bitch', error)
        })
    }

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
        logOut
    }
}

export default useFirebase