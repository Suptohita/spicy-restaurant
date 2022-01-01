import firebaseConfig from "./firebase.config"
import { initializeApp } from "firebase/app";


const initializeAuthenticaion = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuthenticaion