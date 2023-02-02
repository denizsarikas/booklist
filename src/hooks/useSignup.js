import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"

//firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = (email, password) => {
        setError(null)
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                //console.log('user signed up: ', res.user)
                dispatch({ type: 'LOGIN', payload: res.user })
            })
            .catch((err) => {
                setError(err.message)
            })

    }

    return { error, signup}
}