import React from 'react';
import { useHistory } from 'react-router-dom';

function Landingpage(props){
    let history = useHistory();
    return (
        <div>
            {props.loggedInStatus ?
                history.push("/home")
                :
                <div>
                    <button onClick={() => history.push("/login")}>Login</button>
                    <button onClick={() => history.push("/register")}>Register</button>
                </div>
            }
        </div>
    );
}

export default Landingpage;