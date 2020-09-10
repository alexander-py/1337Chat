import React from 'react'
import { Button } from "@material-ui/core";
import "./Login.css";

function Login() {

    const signIn = () => {

    }
    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="http://www.pngmart.com/files/11/Chat-Logo-PNG-Free-Download.png"
                    alt=""
                    />
                    <div className="login__text">
                        <h1>Sign in</h1>
                    </div>
                    <Button type="submit" onClick={signIn}>
                        Sign in with Google
                    </Button>
            </div>
        </div>
    )
}

export default Login
