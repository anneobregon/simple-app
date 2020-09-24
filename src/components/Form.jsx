import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles(() => ({
    content: {
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        marginBottom: "8px",
        backgroundColor: "#3f51b5"
    },
    form: {
        marginTop: "15px"
    },
    btn: {
        margin: "16px 0"
    }
}));

function Form(props) {

    const classes = useStyles();

    const [data, setData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPass: ""
    })


    function handleChange(event) {
        const {name, value} = event.target;

        setData(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });

    }

    return(
        <Container maxWidth="xs" className={classes.content}>
                <Avatar className={classes.avatar}>
                    {props.isRegistered ?
                    <AccountCircleIcon /> : <CreateIcon />
                    }
                </Avatar>
                <Typography variant="h5" align="center">
                    {props.isRegistered ? "Login" : "Register"}
                </Typography>
                <form className={classes.form}>
                    {!props.isRegistered && (
                    <TextField
                        variant="outlined"
                        required
                        label="Full Name"
                        fullWidth
                        margin="normal"
                        type="text"
                        name="fullname" 
                        // value={fullname}
                        value={data.fullname}
                        onChange={handleChange}
                    />
                    )}
                    <TextField
                        variant="outlined"
                        required
                        label="Email Address"
                        fullWidth
                        margin="normal"
                        type="email"
                        name="email"
                        // value={email}
                        value={data.email}
                        onChange={handleChange}
                    />
                    <TextField 
                        variant="outlined"
                        required
                        label="Password"
                        fullWidth
                        margin="normal"
                        type="password"
                        name="password"
                        // value={password}
                        value={data.password}
                        onChange={handleChange}
                    />
                    {!props.isRegistered && (
                    <TextField 
                        variant="outlined"
                        required
                        label="Confirm Password"
                        fullWidth
                        margin="normal"
                        type="password"
                        name="confirmPass"
                        // value={confirmPass}
                        value={data.confirmPass}
                        onChange={handleChange}
                    />
                    )}
                    <Button 
                        className={classes.btn} 
                        color="primary" 
                        variant="contained" 
                        fullWidth 
                        onClick={() => props.clickButton(data)}
                    >
                        {props.isRegistered ? "Login" : "Register"}
                    </Button>
                    <Typography align="center">
                        {props.isRegistered ?
                        <Link href="/register" color="primary">
                            Don't have an account? Sign Up
                        </Link>
                        :
                        <Link href="/login" color="primary">
                            Have already an account? Login here
                        </Link>
                        }
                    </Typography>
                </form>
            </Container>
    );
}

export default Form