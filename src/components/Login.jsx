
import React, { useState } from 'react';
import Form from './Form'
import { useHistory } from 'react-router-dom';

function Login(props){

    let history = useHistory();

    function handleClick(data) {
        const {email, password} = data;
        
        if(email === "anne" && password === "1234") {
            props.handleLogin();
            history.push("/home");
        } else {
            console.log("Please enter your email and password")
        }
    }

    return (
        <div>
            {props.loggedInStatus ?
            history.push("/home")
            :
            <Form isRegistered={true} clickButton={handleClick}/>
            }
        </div>
    );
}

export default Login;