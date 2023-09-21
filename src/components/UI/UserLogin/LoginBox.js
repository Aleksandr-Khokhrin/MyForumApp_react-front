import React, { useState, useEffect } from "react";
import Login from "./Login";
import SingIn from "./SingIn";

const LoginBox = (props) => {
    const [login, setLogin] = useState(true)
    const [userInform, setUserInform] = useState()

    const loginStateHandler = (elem) => {
        setLogin(elem)
    }
    const openProfileHandler = (elem => {
        props.onOpenProfile(elem)
    })
    const userInfo = (data) => {
        props.userInfo(data)
    }
    return (
        <div>
            {
                login ? <Login userInfo={userInfo} onOpenProfile={openProfileHandler} onloginState={loginStateHandler} />
                    : <SingIn userInfo={userInfo} onOpenProfile={openProfileHandler} onloginState={loginStateHandler} />
            }
        </div>
    )
}

export default LoginBox;