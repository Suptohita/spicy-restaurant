import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
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
        .then(console.log(user))
    }


    return{
        signInUsingGoogle,
        user,
        error,
        logOut
    }
}

export default useFirebase