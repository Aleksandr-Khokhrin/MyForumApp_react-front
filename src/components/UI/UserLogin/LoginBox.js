import React, { useState, useEffect } from "react";
import Login from "./Login";
import SingIn from "./SingIn";

const LoginBox = (props) => {
    const [login, setLogin] = useState(true)

    const loginStateHandler = (elem) => {
        setLogin(elem)
    }
    const openProfileHandler = (elem => {
        props.onOpenProfile(elem)
    })
    return (
        <div>
            {
            login ? <Login onOpenProfile={openProfileHandler} onloginState={loginStateHandler}/> 
            : <SingIn onOpenProfile={openProfileHandler} onloginState={loginStateHandler}/>
            }
        </div>
    )
}

export default LoginBox;