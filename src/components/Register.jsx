
import React, { useState } from 'react';
import Form from './Form'
import { useHistory } from 'react-router-dom';

function Register(props){

    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleClick(data) {
        console.log(data);
        history.push("/login");
    }

    return (
        <div>
            {props.loggedInStatus ?
            history.push("/home")
            :
            <Form isRegistered={false} clickButton={handleClick}/>
            }
        </div>
    );
}

export default Register;