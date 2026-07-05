import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication= true}){
    const navigate= useNavigate()
    const [loader, setLoader]= useState(true)
    const authStatus= useSelector(state=> state.auth.status)

    useEffect(() => {
        if(authentication && authStatus!== authentication){
            navigate("/")
        }else if(!authentication && authStatus!== authentication){
            navigate("/")
        }
        // avoid synchronous setState inside effect to prevent cascading renders
        setTimeout(() => setLoader(false), 0)
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}

// This code defines a Protected Route wrapper (or Higher-Order Component) in React. Its primary purpose is to restrict access to certain pages (components) based on whether a user is logged in or not.